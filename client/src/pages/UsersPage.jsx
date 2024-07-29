// import { useState } from "react";
// import UserForm from "../components/UserForm";
// import UsersList from "../components/UsersList";
// import EditUserDialog from "../components/EditUserDialog";

// function UsersPage() {
//     const [users, setUsers] = useState([]);
//     const [isDialogOpen, setIsDialogOpen] = useState(false);
//     const [selectedUser, setSelectedUser] = useState(null);

//     const handleDialogOpen = (user) => {
//         if (isDialogOpen) {
//             setIsDialogOpen(false);
//             setSelectedUser(null);
//         } else {
//             setIsDialogOpen(true);
//             setSelectedUser(user);
//         }
//     };

//     const handleDialogClose = () => {
//         setIsDialogOpen(false);
//         setSelectedUser(null);
//     };

//     const createUser = (usersData) => {
//         setUsers(usersData);
//     };

//     const handleUpdateUser = (updatedUser) => {
//         console.log("Updating user:", updatedUser);
//         setUsers((prevUsers) =>
//             prevUsers.map((user) =>
//                 user.id === updatedUser.id ? updatedUser : user
//             )
//         );
//         handleDialogClose();
//     };

//     return (
//         <>
//             <UserForm onCreate={createUser} users={users}/>
//             {/* TODO: display cards in grid form */}
//             {users && (
//                 <UsersList
//                     users={users}
//                     handleDialog={handleDialogOpen}
//                 />
//             )}
//             {isDialogOpen && (
//                 <EditUserDialog
//                     handleDialog={handleDialogOpen}
//                     user={selectedUser}
//                     onUpdateUser={handleUpdateUser}
//                 />
//             )}
//         </>
//     );
// }

// export default UsersPage;


//no redux
// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import UsersList from '../components/UsersList';

// function UsersPage({ users, handleDialog }) {
//     const location = useLocation();
//     const [localUsers, setLocalUsers] = useState(users);

//     useEffect(() => {
//         if (location.state && location.state.users) {
//             setLocalUsers(location.state.users);
//         }
//     }, [location.state]);

//     return <UsersList users={localUsers} handleDialog={handleDialog} />;
// }

// export default UsersPage;

//redux 1
import React from 'react';
import {  useSelector } from 'react-redux';
import UsersList from '../components/UsersList';




const UsersPage = () => {
  const { users } = useSelector(state => state.users);
  console.log('users',users)
  return (
    <>
      <UsersList users={users} />
    </>
  );
};

export default UsersPage;
