import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import UserForm from "./UserForm";

function EditUserDialog({ open, user, closeHandler }) {

    console.log(user, 'user')
    console.log(open, 'open')

    return (
        <Dialog
            open={open} onClose={closeHandler}
        >
            <DialogContent>
                <UserForm
                    formTitle="Edit User"
                    defaultValues={user}
                    isEditDialog={true}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={closeHandler}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}

export default EditUserDialog;


