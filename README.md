# React + Vite SPA Template

React + Vite + TanStack Router + Zustand + vanilla-extract で構築されたモダンなSPAアプリケーションテンプレート。

## 技術スタック

### コア

- **Framework**: React 19
- **Build Tool**: Vite + @vitejs/plugin-react-swc (高速ビルド)
- **Language**: TypeScript
- **Routing**: TanStack Router (ファイルベースルーティング + Lazy Loading)
- **State Management**:
  - Zustand (グローバル状態管理、Persist & DevTools対応)
  - Jotai (アトミック状態管理)
- **API Client**: TanStack Query + Axios
- **Styling**: vanilla-extract (TypeScript CSS-in-JS)

### フォーム & バリデーション

- **Form Management**: react-hook-form
- **Validation**: Zod
- **Integration**: @hookform/resolvers

### UI コンポーネント & アニメーション

- **UI Primitives**: Radix UI (Dialog, Dropdown, Tooltip, Tabs, など)
- **Icons**: Lucide React
- **Animations**:
  - Framer Motion (高度なアニメーション)
  - @formkit/auto-animate (自動アニメーション)
- **Utilities**: clsx (条件付きクラス名)

### ユーティリティ

- **Date**: date-fns (日付フォーマット & 計算)
- **IDs**: nanoid (ユニークID生成)
- **Pattern Matching**: ts-pattern (型安全なパターンマッチング)
- **Types**: type-fest (TypeScriptユーティリティ型)
- **Immutable Updates**: immer (シンプルなイミュータブル更新)

### 国際化

- **i18n**: i18next + react-i18next

### 開発者体験

- **Testing**: Vitest + Testing Library
- **Code Quality**: Prettier + ESLint (TypeScript Type-Aware) + Husky + lint-staged
- **Type Checking**: vite-plugin-checker (リアルタイム型チェック)
- **API Mocking**: MSW (Mock Service Worker)
- **Error Handling**: React Error Boundary

### ビルド最適化

- **PWA**: vite-plugin-pwa (Progressive Web App)
- **Compression**: vite-plugin-compression (Gzip圧縮)
- **Image Optimization**: vite-plugin-image-optimizer

### デプロイ

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
│   ├── components/          # 共通コンポーネント
│   │   ├── ErrorBoundary.tsx       # エラーバウンダリ
│   │   ├── ErrorBoundary.css.ts    # vanilla-extractスタイル
│   │   ├── LoadingSpinner.tsx      # ローディングスピナー
│   │   └── LoadingSpinner.css.ts   # vanilla-extractスタイル
│   ├── hooks/               # カスタムフック
│   │   └── useUsers.ts      # TanStack Queryフック
│   ├── lib/                 # ライブラリ設定
│   │   ├── api.ts           # API関数
│   │   └── axios.ts         # Axios設定
│   ├── routes/              # TanStack Router ルート（ファイルベース）
│   │   ├── __root.tsx       # ルートレイアウト
│   │   ├── __root.css.ts    # ルートスタイル
│   │   ├── index.tsx        # / ページ（Zustand例）
│   │   ├── about.tsx        # /about ページ
│   │   ├── users.lazy.tsx   # /users ページ（コード分割 + Suspense）
│   │   └── users.css.ts     # usersページスタイル
│   ├── stores/              # Zustand ストア
│   │   ├── __tests__/       # ストアのテスト
│   │   └── useCounterStore.ts # カウンターストア
│   ├── types/               # TypeScript型定義
│   │   └── user.ts          # ユーザー関連の型
│   ├── test/                # テスト設定
│   ├── main.tsx             # エントリーポイント
│   ├── index.css            # グローバルスタイル
│   ├── vite-env.d.ts        # 環境変数の型定義
│   └── routeTree.gen.ts     # TanStack Router自動生成（git無視）
├── public/                  # 静的ファイル
├── vite.config.ts           # Vite + vanilla-extract設定
├── vercel.json              # Vercel設定
└── tsconfig.json            # TypeScript設定
```

## 主な機能

### 1. TanStack Router

ファイルベースのルーティングシステム。`users.lazy.tsx` では React.lazy + Suspense によるコード分割を実装。

### 2. TanStack Query + Axios

型安全なAPI呼び出しとキャッシング。`src/hooks/useUsers.ts` と `src/api/users.ts` を参照。

### 3. Zustand & Jotai

- **Zustand**: グローバル状態管理。ホームページのカウンター例を参照。
- **Jotai**: アトミック状態管理。軽量で分散した状態管理に最適。

### 4. vanilla-extract (TypeScript CSS)

型安全でゼロランタイムなCSS-in-TypeScript。コンポーネントの隣に`.css.ts`ファイルを配置。

**Button.css.ts:**

```typescript
import { style } from "@vanilla-extract/css";

export const button = style({
  backgroundColor: "#2563eb",
  color: "white",
  padding: "0.5rem 1rem",
  borderRadius: "0.25rem",
  ":hover": {
    backgroundColor: "#1d4ed8",
  },
});
```

**Button.tsx:**

```typescript
import * as styles from "./Button.css";

export function Button() {
  return <button className={styles.button}>Click me</button>;
}
```

### 5. React Hook Form + Zod

型安全なフォームバリデーション。Zodスキーマを使用して入力データを検証。

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  age: z.number().min(18),
});

type FormData = z.infer<typeof schema>;

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<FormData>({
  resolver: zodResolver(schema),
});
```

### 6. Radix UI コンポーネント

アクセシブルで無駄のないUIプリミティブ。Dialog、Dropdown、Tooltip、Tabsなど。

```typescript
import * as Dialog from "@radix-ui/react-dialog";

<Dialog.Root>
  <Dialog.Trigger>Open</Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content>
      <Dialog.Title>Title</Dialog.Title>
      <Dialog.Description>Description</Dialog.Description>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
```

### 7. Framer Motion & Auto-Animate

- **Framer Motion**: 高度なアニメーション制御
- **Auto-Animate**: 要素の追加・削除を自動的にアニメーション化

### 8. ts-pattern

型安全なパターンマッチング。複雑な条件分岐を読みやすく記述。

```typescript
import { match } from "ts-pattern";

const result = match(value)
  .with({ status: "success" }, (data) => `Success: ${data}`)
  .with({ status: "error" }, (err) => `Error: ${err}`)
  .otherwise(() => "Unknown");
```

### 9. MSW (Mock Service Worker)

開発環境でAPIをモック。`src/mocks/handlers.ts` でハンドラーを定義。

### 10. i18next

多言語対応。`src/i18n/config.ts` で言語リソースを設定。

### 11. 型安全な環境変数

`src/vite-env.d.ts` で環境変数の型を定義。

```typescript
const apiUrl = import.meta.env.VITE_API_BASE_URL; // 型安全
```

### 12. Error Boundary

本番環境でのエラーハンドリング。`src/components/ErrorBoundary.tsx` を参照。

### 13. 型厳密なESLint

TypeScriptの型チェックを含む厳密なLintルール。

### 14. 包括的な例

`/examples` ページですべてのライブラリの実装例を確認できます：

- フォーム管理（React Hook Form + Zod）
- Radix UIコンポーネント
- アニメーション（Framer Motion & Auto-Animate）
- アイコン（Lucide React）
- 状態管理（Jotai）
- パターンマッチング（ts-pattern）
- 日付操作（date-fns）

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
