import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
  padding: 1rem;
`;

const Card = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 28rem;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #dc2626;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  color: #374151;
  margin-bottom: 1rem;
`;

const Details = styled.details`
  margin-bottom: 1rem;
`;

const Summary = styled.summary`
  cursor: pointer;
  font-size: 0.875rem;
  color: #6b7280;

  &:hover {
    color: #1f2937;
  }
`;

const ErrorText = styled.pre`
  margin-top: 0.5rem;
  font-size: 0.75rem;
  background-color: #f3f4f6;
  padding: 1rem;
  border-radius: 0.25rem;
  overflow: auto;
  white-space: pre-wrap;
  font-family: monospace;
`;

const Button = styled.button`
  width: 100%;
  background-color: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }
`;

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Container>
          <Card>
            <Title>Something went wrong</Title>
            <Message>We're sorry for the inconvenience. Please try refreshing the page.</Message>
            {this.state.error && (
              <Details>
                <Summary>Error details</Summary>
                <ErrorText>{this.state.error.toString()}</ErrorText>
              </Details>
            )}
            <Button onClick={() => window.location.reload()}>Reload page</Button>
          </Card>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
