import { Box, Button, Card, CardContent, Icon, IconButton, ListItem, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material';
import * as React from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';

function UserCard({ user, handleDialog }) {
   console.log("rendering the card component user: ", user)
    return (
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
                        <IconButton edge="end"  onClick={() => handleDialog(user)}>
                            <EditOutlinedIcon fontSize="small" />
                        </IconButton>
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
    );
}

export default UserCard;
