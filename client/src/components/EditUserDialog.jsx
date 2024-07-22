// import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
// import UserForm from "./UserForm";

// function EditUserDialog({ handleDialog, user, onUpdateUser }) {
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const formData = new FormData(event.currentTarget);
//         const formJson = Object.fromEntries(formData.entries());
//         onUpdateUser({
//             ...user,
//             ...formJson,
//         });
//         handleDialog(); // Close dialog after form submission
//     };

//     return (
//         <Dialog
//             open={handleDialog}
//             onClose={handleDialog}
//             PaperProps={{
//                 component: 'form',
//                 onSubmit: handleSubmit,
//             }}
//         >
//             <DialogContent>
//                 <UserForm formTitle="Edit User" showSubmitButton={false} defaultValues={{
//                     defaultId: user.id,
//                     defaultEmail: user.email,
//                     defaultFn: user.fn,
//                     defaultLn: user.ln,
//                     defaultPhoneNumber: user.phone,
//                     defaultCompany: user.company,
//                     defaultDivision: user.division,
//                     defaultStartingDate: user.date
//                 }} />
//             </DialogContent>
//             <DialogActions>
//                 <Button onClick={handleDialog}>Cancel</Button>
//                 <Button type="submit">Save</Button>
//             </DialogActions>
//         </Dialog>
//     );
// }

// export default EditUserDialog;

import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import UserForm from "./UserForm";

function EditUserDialog({ handleDialog, user, onUpdateUser }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formData)
        console.log(formJson.fn)
        const updatedUser = {
            ...user,
            fn: formJson.fn || user.fn,
            ln: formJson.ln || user.ln,
            email: formJson.email || user.email,
            phone: formJson.phone || user.phone,
            company: formJson.company || user.company,
            division: formJson.division || user.division,
            date: formJson.date || user.date
        };

        onUpdateUser(updatedUser);
    };

    return (
        <Dialog
            open={true}
            onClose={handleDialog}
            PaperProps={{
                component: 'form',
                onSubmit: handleSubmit,
            }}
        >
            <DialogContent>
                <UserForm
                    formTitle="Edit User"
                    showSubmitButton={false}
                    defaultValues={{
                        defaultId: user.id,
                        defaultEmail: user.email,
                        defaultFn: user.fn,
                        defaultLn: user.ln,
                        defaultPhoneNumber: user.phone,
                        defaultCompany: user.company,
                        defaultDivision: user.division,
                        defaultStartingDate: user.date
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDialog}>Cancel</Button>
                <Button type="submit">Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export default EditUserDialog;

