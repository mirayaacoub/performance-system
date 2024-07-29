import { Card, CardContent, Dialog, DialogTitle, Grid, Icon, IconButton, ListItem, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material';
import * as React from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import EditUserDialog from './EditUserDialog';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../slices/usersSlice';

function UserCard({ user }) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()
    const closeHandler = () => {
        setOpen(false)
    }

    const deleteHandler = () => {
        dispatch(deleteUser(user.id));
        alert("User deleted succesfully");
        console.log("user deleted");
    }

    return (
        <>
            <Card
                orientation="horizontal"
                sx={{
                    width: '300px',
                    mb: 5
                }}
            >
                <CardContent>
                    <ListItem>
                        <ListItemText primary={`${user.fn} ${user.ln}`} secondary={user.division} />
                        <ListItemSecondaryAction>
                            <Grid container spacing={2} column={12}>
                                <Grid item xs={6}>
                                    <IconButton edge="end" onClick={() => setOpen(true)}>
                                        <EditOutlinedIcon fontSize="small" />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={6}>
                                    <IconButton edge="end" onClick={() => deleteHandler()}>
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem sx={{ alignItems: 'flex-start' }}>
                        <Icon>
                            <ApartmentOutlinedIcon fontSize='small' />
                        </Icon>
                        <ListItemText primary={user.company} />
                    </ListItem>
                    <ListItem sx={{ alignItems: 'flex-start' }}>
                        <Icon>
                            <CalendarMonthOutlinedIcon fontSize='small' />
                        </Icon>
                        <ListItemText primary={user.date} />
                    </ListItem>
                    <ListItem sx={{ alignItems: 'flex-start' }}>
                        <Icon>
                            <AlternateEmailOutlinedIcon fontSize="small" />
                        </Icon>
                        <ListItemText primary={user.email} />
                    </ListItem>
                    <ListItem sx={{ alignItems: 'flex-start' }}>
                        <Icon>
                            <PhoneEnabledOutlinedIcon fontSize='small' />
                        </Icon>
                        <ListItemText primary={user.phone} />
                    </ListItem>
                </CardContent>
            </Card >
            <EditUserDialog
                open={open}
                closeHandler={closeHandler}
                user={user} />

        </>
    );
}

export default UserCard;
