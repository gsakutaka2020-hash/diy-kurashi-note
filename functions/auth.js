export async function onRequest({ request, env }) {
  const url = new URL(request.url);
  const scope = url.searchParams.get('scope') || 'repo,user';
  const state = url.searchParams.get('state') || '';
  const redirectUri = `${url.origin}/callback`;
  const githubUrl = `https://github.com/login/oauth/authorize?client_id=${env.GITHUB_CLIENT_ID}&scope=${encodeURIComponent(scope)}&state=${encodeURIComponent(state)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
  return Response.redirect(githubUrl, 302);
}
