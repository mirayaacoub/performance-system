import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useState, useRef } from "react";
import dayjs from 'dayjs';
import React from 'react';
import PhoneInput, { } from 'react-phone-number-input';
import {
    isPossiblePhoneNumber,
    isValidPhoneNumber,
    validatePhoneNumberLength, parsePhoneNumberFromString
} from 'libphonenumber-js'

//styles
import 'react-phone-number-input/style.css';
import '../phone-input-style.css';

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            username: username,
            password: password,
        }

        if (!validate(userData)) {
            return;
        }

        setUsers([...users, userData]);
        onLogin([...users, userData]);
        reset();
    }

    const reset = () => {
       setUsername('');
       setPassword('');
    }

    const validate = (user) => {
        const { username, password } = user;
        const newErrors = {};
        if (!username) newErrors.username = 'username is required';
        if (!password) newErrors.password = 'Password is required'; 
        // TODO: add password validation
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    return (                                                                 
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            <Container maxWidth="sm">
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} columns={12}>
                        <Grid item xs={12}>
                            <Box sx={{ alignItems: 'center', textAlign: 'center' }}>
                                <Typography component="h1" variant="h5">
                                    Sign in
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="username"
                                label="Username"
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                error={!!errors.fn}
                                helperText={errors.fn}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                    </Grid>

                </form>
            </Container>
        </Box >
    );
}

export default LoginForm;
