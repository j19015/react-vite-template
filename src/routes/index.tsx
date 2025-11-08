import { createFileRoute } from "@tanstack/react-router";
import styled from "@emotion/styled";
import { useCounterStore } from "@/stores/useCounterStore";

const Container = styled.div`
  display: flex;
  min-height: 80vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  color: #6b7280;
  margin-bottom: 3rem;
  text-align: center;
`;

const CounterCard = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const CounterTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
`;

const CounterValue = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #2563eb;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
`;

const Button = styled.button<{ variant?: "primary" | "secondary" | "danger" }>`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  ${({ variant = "primary" }) => {
    switch (variant) {
      case "danger":
        return `
          background-color: #dc2626;
          color: white;
          &:hover {
            background-color: #b91c1c;
          }
        `;
      case "secondary":
        return `
          background-color: #6b7280;
          color: white;
          &:hover {
            background-color: #4b5563;
          }
        `;
      default:
        return `
          background-color: #2563eb;
          color: white;
          &:hover {
            background-color: #1d4ed8;
          }
        `;
    }
  }}
`;

const TechList = styled.ul`
  margin-top: 2rem;
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;

const TechBadge = styled.li`
  background-color: #eff6ff;
  color: #1e40af;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <Container>
      <Title>Welcome to React + Vite SPA</Title>
      <Subtitle>Modern SPA template with best practices</Subtitle>

      <CounterCard>
        <CounterTitle>Zustand Counter Example</CounterTitle>
        <CounterValue>{count}</CounterValue>
        <ButtonGroup>
          <Button onClick={decrement}>-1</Button>
          <Button variant="secondary" onClick={reset}>
            Reset
          </Button>
          <Button onClick={increment}>+1</Button>
        </ButtonGroup>
      </CounterCard>

      <TechList>
        <TechBadge>React 19</TechBadge>
        <TechBadge>Vite</TechBadge>
        <TechBadge>TypeScript</TechBadge>
        <TechBadge>TanStack Router</TechBadge>
        <TechBadge>TanStack Query</TechBadge>
        <TechBadge>Zustand</TechBadge>
        <TechBadge>Emotion</TechBadge>
        <TechBadge>Axios</TechBadge>
        <TechBadge>Vitest</TechBadge>
      </TechList>
    </Container>
  );
}
