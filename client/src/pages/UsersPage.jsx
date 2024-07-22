import { useState } from "react";
import UserForm from "../components/UserForm";
import UsersList from "../components/UsersList";
import EditUserDialog from "../components/EditUserDialog";

function UsersPage() {
    const [users, setUsers] = useState([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleDialogOpen = (user) => {
        if (isDialogOpen) {
            setIsDialogOpen(false);
            setSelectedUser(null);
        } else {
            setIsDialogOpen(true);
            setSelectedUser(user);
        }
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
        setSelectedUser(null);
    };

    const handleLogin = (usersData) => {
        setUsers(usersData);
    };

    const handleUpdateUser = (updatedUser) => {
        console.log("Updating user:", updatedUser);
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
            )
        );
        handleDialogClose();
    };

    return (
        <>
            <UserForm onLogin={handleLogin} users={users}/>
            {/* TODO: display cards in grid form */}
            {users && (
                <UsersList
                    users={users}
                    handleDialog={handleDialogOpen}
                />
            )}
            {isDialogOpen && (
                <EditUserDialog
                    handleDialog={handleDialogOpen}
                    user={selectedUser}
                    onUpdateUser={handleUpdateUser}
                />
            )}
        </>
    );
}

export default UsersPage;
