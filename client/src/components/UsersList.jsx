import React from 'react';
import { Box, Container, List } from "@mui/material";
import UserCard from "./UserCard";


function UsersList({ users }) {
    console.log('users',users)
    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 2, 
                }}
            >
                <List>
                    {users.map((user) => (
                        <UserCard
                            key={user.id}
                            user={user}
                        />
                    ))}
                </List>
            </Box>
        </Container>
    );
}

export default UsersList;
