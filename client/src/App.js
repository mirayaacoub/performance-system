// // import './App.css';
// // import { useState } from 'react';
// // import NavBar from './components/NavBar';

// // // pages
// // import HomePage from './pages/HomePage';
// // import UsersPage from './pages/UsersPage';
// // import LoginPage from './pages/LoginPage';

// // function App() {
// //   const [currentPage, setCurrentPage] = useState('home');

// //   const renderPage = () => {
// //     switch (currentPage) {
// //       case 'home':
// //         return <HomePage></HomePage>;
// //       case 'login':
// //         return <LoginPage></LoginPage>
// //       case 'users':
// //         return <UsersPage></UsersPage>;
// //       default:
// //         return <HomePage></HomePage>
// //     }
// //   }

// //   return (
// //     <>
// //       <NavBar setCurrentPage={setCurrentPage}></NavBar>
// //       {renderPage()}
// //     </>

// //   );
// // }

// // export default App;


// // import './App.css';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// // //components
// // import NavBar from './components/NavBar';
// // import Users from './components/Users';
// // import EditUserDialog from './components/EditUserDialog';

// // // pages
// // import HomePage from './pages/HomePage';
// // import UsersPage from './pages/UsersPage';
// // import CreateUserPage from './pages/CreateUserPage';
// // import LoginPage from './pages/LoginPage';
// // import { useState } from 'react';

// // function App() {
// //   const [users, setUsers] = useState([]);
// //   const [isDialogOpen, setIsDialogOpen] = useState(false);
// //   const [selectedUser, setSelectedUser] = useState(null);

// //   const handleDialogOpen = (user) => {
// //     if (isDialogOpen) {
// //       setIsDialogOpen(false);
// //       setSelectedUser(null);
// //     } else {
// //       setIsDialogOpen(true);
// //       setSelectedUser(user);
// //     }
// //   };

// //   const handleDialogClose = () => {
// //     setIsDialogOpen(false);
// //     setSelectedUser(null);
// //   };


// //   const handleUpdateUser = (updatedUser) => {
// //     console.log("Updating user:", updatedUser);
// //     setUsers((prevUsers) =>
// //       prevUsers.map((user) =>
// //         user.id === updatedUser.id ? updatedUser : user
// //       )
// //     );
// //     handleDialogClose();
// //   };

// //   return (
// //     <Router>
// //       <NavBar />
// //       <Routes>
// //         <Route path="/" element={<HomePage />} />
// //         <Route path="/login" element={<LoginPage />} />
// //         <Route path="/create" element={<CreateUserPage />} />
// //         {/* TODO: display cards in grid form */}
// //         {users && (
// //           <Route path="/users" element={<Users users={users}
// //             handleDialog={handleDialogOpen} />} />

// //         )}
// //         {isDialogOpen && (
// //           <EditUserDialog
// //             handleDialog={handleDialogOpen}
// //             user={selectedUser}
// //             onUpdateUser={handleUpdateUser}
// //           />
// //         )}
// //         {/* <Route path="/users" element={<Users />} /> */}
// //         <Route path="*" element={<HomePage />} /> {/* Fallback route */}
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;
// import './App.css';
// import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// // Components
// import NavBar from './components/NavBar';
// import EditUserDialog from './components/EditUserDialog';

// // Pages
// import HomePage from './pages/HomePage';
// // import UsersPage from './pages/UsersPage';
// import LoginPage from './pages/LoginPage';
// import CreateUserPage from './pages/CreateUserPage';
// import UsersPage from './pages/UsersPage';

// function App() {
//   const [users, setUsers] = useState([]);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);

//   const handleDialogOpen = (user) => {
//     setIsDialogOpen((prev) => !prev);
//     setSelectedUser(user);
//   };

//   const handleDialogClose = () => {
//     setIsDialogOpen(false);
//     setSelectedUser(null);
//   };

//   const handleUpdateUser = (updatedUser) => {
//     setUsers((prevUsers) =>
//       prevUsers.map((user) =>
//         user.id === updatedUser.id ? updatedUser : user
//       )
//     );
//     handleDialogClose();
//   };

//   return (
//     <Router>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/create" element={<CreateUserPage onCreate={setUsers} />} />
//         <Route path="/users" element={<UsersPage users={users} handleDialog={handleDialogOpen} />} />
//         <Route path="*" element={<HomePage />} /> {/* Fallback route */}
//       </Routes>
//       {isDialogOpen && (
//         <EditUserDialog
//           handleDialog={handleDialogOpen}
//           user={selectedUser}
//           onUpdateUser={handleUpdateUser}
//         />
//       )}
//     </Router>
//   );
// }

// export default App;


import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CreateUserPage from './pages/CreateUserPage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create" element={<CreateUserPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="*" element={<HomePage />} /> {/* Fallback route */}
      </Routes>
    </Router>
  );
}

export default App;
