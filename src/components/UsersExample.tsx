import styled from "@emotion/styled";
import { useUsers } from "@/hooks/useUsers";

const Container = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  color: #6b7280;
  margin-bottom: 2rem;
`;

const UserGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const UserCard = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const UserName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const UserEmail = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
`;

const ErrorMessage = styled.div`
  background-color: #fee2e2;
  border: 1px solid #fca5a5;
  color: #991b1b;
  padding: 1rem;
  border-radius: 0.5rem;
`;

const InfoMessage = styled.div`
  background-color: #dbeafe;
  border: 1px solid #93c5fd;
  color: #1e40af;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export default function UsersExample() {
  const { data: users, isLoading, error } = useUsers();

  if (isLoading) {
    return (
      <Container>
        <p>Loading users...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorMessage>
          Error loading users: {error instanceof Error ? error.message : "Unknown error"}
        </ErrorMessage>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Users Example</Title>
      <Description>
        This is a demonstration of TanStack Query + Axios + Emotion styled components.
      </Description>

      <InfoMessage style={{ marginBottom: "2rem" }}>
        Note: This is using a placeholder API. Update VITE_API_BASE_URL in your .env file to use a
        real API.
      </InfoMessage>

      {users && users.length > 0 ? (
        <UserGrid>
          {users.map((user) => (
            <UserCard key={user.id}>
              <UserName>{user.name}</UserName>
              <UserEmail>{user.email}</UserEmail>
            </UserCard>
          ))}
        </UserGrid>
      ) : (
        <p>No users found.</p>
      )}
    </Container>
  );
}
