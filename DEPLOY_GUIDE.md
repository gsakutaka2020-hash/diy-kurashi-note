# デプロイ手順ガイド — DIYと暮らしのリアルノート

## Step 1: Node.js のインストール（まだの場合）

1. https://nodejs.org/ja/ を開く
2. **LTS版**をダウンロード・インストール
3. インストール確認：
   ```
   node --version
   npm --version
   ```

## Step 2: 依存パッケージのインストール

```bash
cd C:\Users\gsaku\Documents\diy-kurashi-note
npm install
```

## Step 3: ローカルで動作確認

```bash
npm run dev
```
→ http://localhost:4321 でプレビュー確認

## Step 4: GitHub リポジトリを作成

1. https://github.com/ にアクセスしてログイン（なければ新規作成）
2. 右上の「+」→「New repository」
3. Repository name: `diy-kurashi-note`
4. Public を選択 → 「Create repository」

## Step 5: GitHubにプッシュ

プロジェクトフォルダで以下を実行：

```bash
git init
git add .
git commit -m "Initial commit: DIYと暮らしのリアルノート"
git branch -M main
git remote add origin https://github.com/【あなたのGitHubユーザー名】/diy-kurashi-note.git
git push -u origin main
```

## Step 6: Cloudflare アカウント作成

1. https://dash.cloudflare.com/sign-up を開く
2. メールアドレスとパスワードで登録

## Step 7: ドメイン取得（diy-kurashi-note.com）

1. Cloudflareダッシュボード左メニュー → **「ドメイン登録」**
2. 検索欄に `diy-kurashi-note.com` と入力
3. 取得可能なら購入（約$10/年 ≈ 1,500円）
4. 支払い情報を入力して購入

## Step 8: Cloudflare Pages のデプロイ設定

1. Cloudflareダッシュボード → **「Workers & Pages」** → 「Pages」タブ
2. **「GitHubに接続」** → GitHubアカウントを認証
3. リポジトリ `diy-kurashi-note` を選択
4. ビルド設定：
   - **フレームワーク**: Astro
   - **ビルドコマンド**: `npm run build`
   - **ビルド出力ディレクトリ**: `dist`
5. 「保存してデプロイ」をクリック

デプロイ完了後、`*.pages.dev` のURLでアクセス可能になります。

## Step 9: カスタムドメインの設定

1. Cloudflare Pages のプロジェクト → 「カスタムドメイン」タブ
2. `diy-kurashi-note.com` と `www.diy-kurashi-note.com` を追加
3. Cloudflareで取得したドメインなので自動的にDNSが設定されます

## Step 10: 今後の記事追加方法

`src/content/blog/` フォルダに `.md` ファイルを追加するだけです。

```markdown
---
title: "記事タイトル"
description: "記事の説明（150文字程度）"
pubDate: 2024-05-01
category: diy  # diy / gadget / kurashi / gundam / ai
tags: ["タグ1", "タグ2"]
---

## 記事本文

ここから記事を書きます。
```

GitHubにプッシュすると自動でビルド・デプロイされます。

---

## カテゴリ一覧

| ID | 表示名 | 用途 |
|----|--------|------|
| `diy` | DIY・リフォーム | 古民家・内装・外構DIY |
| `gadget` | ガジェット・家電 | 製品レビュー |
| `kurashi` | 生活・暮らしの知恵 | 節約・収納・家事 |
| `gundam` | ガンダム関連 | ガンプラ・考察 |
| `ai` | AI・テクノロジー | AIツール・テック |
