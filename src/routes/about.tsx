import { createFileRoute } from "@tanstack/react-router";
import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Section = styled.section`
  margin-top: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const Text = styled.p`
  color: #4b5563;
  line-height: 1.75;
  margin-bottom: 1rem;
`;

const FeatureList = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
  color: #4b5563;
`;

const FeatureItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <Container>
      <Title>About This Template</Title>
      <Text>
        This is a modern React SPA template built with industry-standard tools and best practices.
      </Text>

      <Section>
        <SectionTitle>Key Features</SectionTitle>
        <FeatureList>
          <FeatureItem>
            <strong>TanStack Router</strong> - Type-safe file-based routing with code splitting
          </FeatureItem>
          <FeatureItem>
            <strong>TanStack Query</strong> - Powerful async state management for API calls
          </FeatureItem>
          <FeatureItem>
            <strong>Zustand</strong> - Lightweight state management with persist middleware
          </FeatureItem>
          <FeatureItem>
            <strong>Emotion</strong> - CSS-in-JS with excellent TypeScript support
          </FeatureItem>
          <FeatureItem>
            <strong>Axios</strong> - HTTP client with interceptors for auth and error handling
          </FeatureItem>
          <FeatureItem>
            <strong>Type-safe ESLint</strong> - Strict TypeScript linting rules
          </FeatureItem>
          <FeatureItem>
            <strong>Vitest</strong> - Fast unit testing with Testing Library
          </FeatureItem>
          <FeatureItem>
            <strong>Error Boundary</strong> - Graceful error handling in production
          </FeatureItem>
          <FeatureItem>
            <strong>Pre-commit Hooks</strong> - Automatic formatting and linting
          </FeatureItem>
        </FeatureList>
      </Section>

      <Section>
        <SectionTitle>Development</SectionTitle>
        <Text>
          This template is configured for optimal developer experience with hot module replacement,
          type checking, and automatic code formatting on save (when using VSCode with recommended
          extensions).
        </Text>
      </Section>
    </Container>
  );
}
