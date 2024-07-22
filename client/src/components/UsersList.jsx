import { Box, Container, List } from "@mui/material";
import UserCard from "./UserCard";

function UsersList({ users, handleDialog }) {
    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 2, // Add margin top for spacing
                }}
            >
                <List>
                {users.map((user) => (
                        <UserCard 
                            key={user.id} 
                            user={user} 
                            handleDialog={handleDialog} 
                        />
                    ))}
                </List>
            </Box>
        </Container>
    );
}

export default UsersList;
