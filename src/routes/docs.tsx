import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Rocket,
  Zap,
  Package,
  Code,
  Sparkles,
  Shield,
  GitBranch,
  Terminal,
} from "lucide-react";
import * as styles from "./docs.css";

export const Route = createFileRoute("/docs")({
  component: DocsPage,
});

function DocsPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          ⚡️ React + Vite SPA Template
        </h1>
        <p className={styles.heroSubtitle}>
          モダンで高速、そして型安全なReactアプリケーション開発のための
          <br />
          究極のスターターテンプレート
        </p>
        <div className={styles.heroButtons}>
          <a
            href="https://github.com/j19015/react-vite-template"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buttonPrimary}
          >
            <GitBranch size={20} style={{ display: "inline", marginRight: "0.5rem" }} />
            GitHub で見る
          </a>
          <Link to="/" className={styles.buttonSecondary}>
            デモを見る
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>✨ 主な特徴</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Zap size={48} color="#667eea" />
            </div>
            <h3 className={styles.featureTitle}>超高速ビルド</h3>
            <p className={styles.featureDescription}>
              Vite + SWC による爆速のHMRと最適化されたプロダクションビルド。
              開発体験を劇的に向上させます。
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Shield size={48} color="#667eea" />
            </div>
            <h3 className={styles.featureTitle}>型安全</h3>
            <p className={styles.featureDescription}>
              TypeScript + Zod + React Hook Form で完全な型安全性。
              実行時エラーを最小限に抑えます。
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Rocket size={48} color="#667eea" />
            </div>
            <h3 className={styles.featureTitle}>最新技術スタック</h3>
            <p className={styles.featureDescription}>
              React 19、TanStack Router、Zustand、vanilla-extract など、
              2025年のベストプラクティスを採用。
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Package size={48} color="#667eea" />
            </div>
            <h3 className={styles.featureTitle}>すぐに使える</h3>
            <p className={styles.featureDescription}>
              ルーティング、状態管理、API呼び出し、フォーム処理など、
              必要な機能がすべて設定済み。
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Sparkles size={48} color="#667eea" />
            </div>
            <h3 className={styles.featureTitle}>優れたDX</h3>
            <p className={styles.featureDescription}>
              ESLint、Prettier、Husky、lint-staged による
              自動コード品質管理とCI/CD。
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Code size={48} color="#667eea" />
            </div>
            <h3 className={styles.featureTitle}>豊富な例</h3>
            <p className={styles.featureDescription}>
              フォーム、アニメーション、状態管理など、
              実践的なコード例が満載。すぐに学べます。
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🚀 使い方</h2>
        <div className={styles.stepsContainer}>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>リポジトリをクローン</h3>
              <p className={styles.stepDescription}>
                まずはテンプレートをローカルにクローンしましょう。
              </p>
              <div className={styles.codeBlock}>
                git clone https://github.com/j19015/react-vite-template.git
                <br />
                cd react-vite-template
              </div>
            </div>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>依存関係をインストール</h3>
              <p className={styles.stepDescription}>
                pnpm を使って必要なパッケージをインストールします。
              </p>
              <div className={styles.codeBlock}>pnpm install</div>
            </div>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>開発サーバーを起動</h3>
              <p className={styles.stepDescription}>
                開発サーバーを起動して、ブラウザで確認しましょう。
              </p>
              <div className={styles.codeBlock}>pnpm run dev</div>
              <p className={styles.stepDescription} style={{ marginTop: "0.75rem" }}>
                🎉 http://localhost:5173 でアプリケーションが起動します！
              </p>
            </div>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>開発を始める</h3>
              <p className={styles.stepDescription}>
                src/routes/ に新しいページを追加したり、
                src/components/ にコンポーネントを作成したりして、
                自由にカスタマイズしましょう！
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🛠️ 技術スタック</h2>
        <div className={styles.stackGrid}>
          <div className={styles.stackCard}>
            <div className={styles.stackName}>React 19</div>
            <div className={styles.stackDescription}>最新のReact</div>
          </div>
          <div className={styles.stackCard}>
            <div className={styles.stackName}>Vite</div>
            <div className={styles.stackDescription}>超高速ビルドツール</div>
          </div>
          <div className={styles.stackCard}>
            <div className={styles.stackName}>TypeScript</div>
            <div className={styles.stackDescription}>型安全な開発</div>
          </div>
          <div className={styles.stackCard}>
            <div className={styles.stackName}>TanStack Router</div>
            <div className={styles.stackDescription}>型安全なルーティング</div>
          </div>
          <div className={styles.stackCard}>
            <div className={styles.stackName}>Zustand</div>
            <div className={styles.stackDescription}>軽量状態管理</div>
          </div>
          <div className={styles.stackCard}>
            <div className={styles.stackName}>TanStack Query</div>
            <div className={styles.stackDescription}>データフェッチング</div>
          </div>
          <div className={styles.stackCard}>
            <div className={styles.stackName}>vanilla-extract</div>
            <div className={styles.stackDescription}>TypeScript CSS</div>
          </div>
          <div className={styles.stackCard}>
            <div className={styles.stackName}>React Hook Form</div>
            <div className={styles.stackDescription}>高性能フォーム</div>
          </div>
          <div className={styles.stackCard}>
            <div className={styles.stackName}>Zod</div>
            <div className={styles.stackDescription}>スキーマバリデーション</div>
          </div>
          <div className={styles.stackCard}>
            <div className={styles.stackName}>Radix UI</div>
            <div className={styles.stackDescription}>アクセシブルなUI</div>
          </div>
          <div className={styles.stackCard}>
            <div className={styles.stackName}>Framer Motion</div>
            <div className={styles.stackDescription}>アニメーション</div>
          </div>
          <div className={styles.stackCard}>
            <div className={styles.stackName}>Vitest</div>
            <div className={styles.stackDescription}>高速テスト</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          <Terminal size={20} style={{ display: "inline", marginRight: "0.5rem", verticalAlign: "middle" }} />
          さあ、始めましょう！
        </p>
        <div className={styles.footerLinks}>
          <Link to="/" className={styles.footerLink}>
            ホーム
          </Link>
          <Link to="/examples" className={styles.footerLink}>
            サンプル
          </Link>
          <Link to="/users" className={styles.footerLink}>
            ユーザー
          </Link>
          <a
            href="https://github.com/j19015/react-vite-template"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
