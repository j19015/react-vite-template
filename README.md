# React + Vite SPA Template

React + Vite + TanStack Router + Zustand で構築されたモダンなSPAアプリケーションテンプレート。

## 技術スタック

- **Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **Routing**: TanStack Router
- **State Management**: Zustand
- **Testing**: Vitest + Testing Library
- **Code Quality**: Prettier + ESLint + Husky + lint-staged
- **Deployment**: Vercel

## セットアップ

### 前提条件

- Node.js 20以上
- pnpm

### インストール手順

1. リポジトリをクローン

```bash
git clone <your-repo-url>
cd react-vite-template
```

2. 依存関係をインストール

```bash
pnpm install
```

3. 環境変数を設定（必要な場合）

```bash
cp .env.example .env
```

4. 開発サーバーを起動

```bash
pnpm run dev
```

http://localhost:5173 でアプリケーションが起動します。

## スクリプト

- `pnpm run dev` - 開発サーバー起動
- `pnpm run build` - 本番用ビルド
- `pnpm run preview` - ビルド後のプレビュー
- `pnpm run lint` - ESLintチェック
- `pnpm run lint:fix` - ESLint自動修正
- `pnpm run format` - Prettierで全ファイルフォーマット
- `pnpm run format:check` - フォーマットチェックのみ
- `pnpm test` - Vitestを実行
- `pnpm test:ui` - Vitest UIを起動
- `pnpm test:run` - テストを1回実行
- `pnpm test:coverage` - カバレッジ計測

## プロジェクト構造

```
react-vite-template/
├── .github/
│   ├── workflows/         # GitHub Actions CI
│   └── pull_request_template.md
├── .vscode/               # VSCode設定
├── src/
│   ├── routes/           # TanStack Router ルート（ファイルベース）
│   │   ├── __root.tsx   # ルートレイアウト
│   │   ├── index.tsx    # / ページ
│   │   └── about.tsx    # /about ページ
│   ├── stores/          # Zustand ストア
│   │   └── __tests__/   # ストアのテスト
│   ├── test/            # テスト設定
│   ├── main.tsx         # エントリーポイント
│   ├── index.css        # グローバルスタイル
│   └── routeTree.gen.ts # TanStack Router自動生成（git無視）
├── public/              # 静的ファイル
├── vite.config.ts       # Vite設定
├── vercel.json          # Vercel設定
└── tsconfig.json        # TypeScript設定
```

## コード品質

pre-commit hookにより、コミット時に自動的にlint + formatが実行されます。

## CI/CD

GitHub Actionsにより、PR作成時に自動的に以下が実行されます：

- Lint
- Test
- Type Check
- Build

## デプロイ

Vercelにデプロイできます。mainブランチへのpushで自動的に本番環境にデプロイされます。

### Vercel設定

1. [Vercel Dashboard](https://vercel.com/dashboard)にアクセス
2. "Add New Project"をクリック
3. GitHubリポジトリを選択してインポート
4. Framework Preset: "Vite"が自動検出される
5. 環境変数を設定（必要な場合）
6. "Deploy"をクリック

## ライセンス

Private
