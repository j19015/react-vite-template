import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Spinner = styled.div`
  width: 3rem;
  height: 3rem;
  border: 2px solid #e5e7eb;
  border-top-color: #2563eb;
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
`;

export default function LoadingSpinner() {
  return (
    <Container>
      <Spinner />
    </Container>
  );
}
