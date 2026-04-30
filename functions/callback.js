export async function onRequest({ request, env }) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  if (!code) return new Response('Missing code', { status: 400 });

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const tokenData = await tokenRes.json();
  if (!tokenData.access_token) {
    return new Response(`Error: ${tokenData.error_description || 'Unknown'}`, { status: 400 });
  }

  const token = tokenData.access_token;
  const provider = 'github';
  const message = `authorization:${provider}:success:${JSON.stringify({ token, provider })}`;

  const html = `<!DOCTYPE html>
<html>
<head><title>Authorized</title></head>
<body>
<script>
(function() {
  var msg = ${JSON.stringify(message)};
  function receiveMessage(e) {
    window.opener.postMessage(msg, e.origin);
    window.close();
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:github", "*");
})();
</script>
</body>
</html>`;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
