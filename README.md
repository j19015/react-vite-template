# React + Vite SPA Template

React + Vite + TanStack Router + Zustand + Emotion で構築されたモダンなSPAアプリケーションテンプレート。

## 技術スタック

- **Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **Routing**: TanStack Router (ファイルベースルーティング)
- **State Management**: Zustand (Persist & DevTools対応)
- **API Client**: TanStack Query + Axios
- **Styling**: Emotion (CSS-in-JS)
- **Testing**: Vitest + Testing Library
- **Code Quality**: Prettier + ESLint (Type-aware) + Husky + lint-staged
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
│   ├── workflows/           # GitHub Actions CI
│   └── pull_request_template.md
├── .vscode/                 # VSCode設定
├── src/
│   ├── api/                 # API層（Axiosクライアント）
│   │   └── users.ts         # ユーザーAPI
│   ├── components/          # 共通コンポーネント
│   │   ├── ErrorBoundary.tsx  # エラーバウンダリ
│   │   ├── LoadingSpinner.tsx # ローディングスピナー
│   │   └── UsersExample.tsx   # TanStack Query使用例
│   ├── hooks/               # カスタムフック
│   │   └── useUsers.ts      # TanStack Queryフック
│   ├── lib/                 # ライブラリ設定
│   │   └── axios.ts         # Axios設定
│   ├── routes/              # TanStack Router ルート（ファイルベース）
│   │   ├── __root.tsx       # ルートレイアウト
│   │   ├── index.tsx        # / ページ（Zustand例）
│   │   ├── about.tsx        # /about ページ
│   │   └── users.lazy.tsx   # /users ページ（コード分割）
│   ├── stores/              # Zustand ストア
│   │   ├── __tests__/       # ストアのテスト
│   │   └── useCounterStore.ts # カウンターストア
│   ├── test/                # テスト設定
│   ├── main.tsx             # エントリーポイント
│   ├── index.css            # グローバルスタイル
│   ├── vite-env.d.ts        # 環境変数の型定義
│   └── routeTree.gen.ts     # TanStack Router自動生成（git無視）
├── public/                  # 静的ファイル
├── vite.config.ts           # Vite設定
├── vercel.json              # Vercel設定
└── tsconfig.json            # TypeScript設定
```

## 主な機能

### 1. TanStack Router

ファイルベースのルーティングシステム。`users.lazy.tsx` では React.lazy + Suspense によるコード分割を実装。

### 2. TanStack Query + Axios

型安全なAPI呼び出しとキャッシング。`src/hooks/useUsers.ts` と `src/api/users.ts` を参照。

### 3. Zustand

軽量で使いやすい状態管理。ホームページのカウンター例を参照。

### 4. Emotion (CSS-in-JS)

TypeScript対応のスタイリング。全コンポーネントで使用例あり。

```typescript
import styled from "@emotion/styled";

const Button = styled.button`
  background-color: #2563eb;
  color: white;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: #1d4ed8;
  }
`;
```

### 5. 型安全な環境変数

`src/vite-env.d.ts` で環境変数の型を定義。

```typescript
const apiUrl = import.meta.env.VITE_API_BASE_URL; // 型安全
```

### 6. Error Boundary

本番環境でのエラーハンドリング。`src/components/ErrorBoundary.tsx` を参照。

### 7. 型厳密なESLint

TypeScriptの型チェックを含む厳密なLintルール。

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
