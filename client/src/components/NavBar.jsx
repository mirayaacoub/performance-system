import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import icon from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const pages = ['home', 'login', 'create', 'users'];

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(false);
    const navigate = useNavigate();

    const handleLogoClick = () => {
        window.open('https://www.aspiresoftware.com/', '_blank', 'noopener,noreferrer');
    };

    const handleRoute = (route) => {
        navigate(route);
    };

    const handleDrawerToggle = () => {
        setAnchorElNav(!anchorElNav);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <IconButton onClick={handleLogoClick} sx={{ display: { xs: 'block', md: 'none' } }}>
                        <img src={icon} alt="icon" style={{ width: '80px', height: '40px' }} />
                    </IconButton>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            INTERNSHIP PERFORMANCE SYSTEM
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                component={Link}
                                to={`/${page}`}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.toUpperCase()}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>

            <Drawer
                anchor="right"
                open={anchorElNav}
                onClose={handleDrawerToggle}
                sx={{ '& .MuiDrawer-paper': { width: 250 } }}
            >
                <Box
                    sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                    role="presentation"
                    onClick={handleDrawerToggle}
                    onKeyDown={handleDrawerToggle}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                        <IconButton onClick={handleDrawerToggle}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <List>
                        {pages.map((page) => (
                            <ListItem key={page} disablePadding>
                                <ListItemButton component={Link} to={`/${page}`}>
                                    <ListItemText primary={page.toUpperCase()} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </AppBar>
    );
}

export default NavBar;


