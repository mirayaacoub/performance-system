import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useState, useRef } from "react";
import dayjs from 'dayjs';
import React from 'react';
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber, validatePhoneNumberLength, parsePhoneNumberFromString } from 'libphonenumber-js';
import 'react-phone-number-input/style.css';
import '../phone-input-style.css';
import { useDispatch } from 'react-redux';
import { addUser, editUser } from '../slices/usersSlice'; // Import the action
import { useNavigate } from "react-router-dom";

function UserForm({ formTitle = 'Create User', defaultValues, isEditDialog }) {

    const dispatch = useDispatch(); // Initialize dispatch
    const [id, setId] = useState(defaultValues?.id || '');
    const [email, setEmail] = useState(defaultValues?.email || '');
    const [fn, setFn] = useState(defaultValues?.fn || '');
    const [ln, setLn] = useState(defaultValues?.ln || '');
    const [phoneNumber, setPhoneNumber] = useState(defaultValues?.phone || '');
    const [company, setCompany] = useState(defaultValues?.company || '');
    const [division, setDivision] = useState(defaultValues?.division || '');
    const [startingDate, setStartingDate] = useState(dayjs(defaultValues?.startingDate || dayjs()));
    const [errors, setErrors] = useState({});
    const inputRef = useRef(null);

    const navigate = useNavigate();

    const CustomPhoneInput = React.forwardRef((props, ref) => (
        <TextField
            {...props}
            inputRef={ref}
            required
            fullWidth
            placeholder="Enter phone number"
            margin="normal"
            id="phone"
            label="Phone Number"
            name="phone"
            autoComplete="phone"
        />
    ));

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            id: id,
            fn: fn,
            ln: ln,
            email: email,
            date: startingDate.format('DD-MM-YYYY'),
            division: division,
            company: company,
            phone: phoneNumber,
        }

        if (!validate(userData)) {
            return;
        }

        if (isEditDialog) {
            console.log('update user', userData);
            dispatch(editUser(userData));
            alert("User updated succesfully");
            return;
        } else {
            console.log('add user: userData', userData)
            dispatch(addUser(userData)); // Dispatch the action to add user
            navigate('/users');
            reset();
        }

    }

    const reset = () => {
        setId('');
        setEmail('');
        setFn('');
        setLn('');
        setPhoneNumber('');
        setCompany('');
        setDivision('');
        setStartingDate(dayjs());
        setErrors({});
    }

    const handlePhoneChange = (value) => {
        setPhoneNumber(value);
    };

    const handleDatePickerChange = (value) => {
        setStartingDate(value);
    }

    const validate = (user) => {
        const { id, fn, ln, email, date, division, company, phone } = user;
        const newErrors = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!id) newErrors.id = 'ID is required';
        if (!fn) newErrors.fn = 'First Name is required';
        if (!ln) newErrors.ln = 'Last Name is required';
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(email)) {
            newErrors.email = 'Email is not valid';
        }
        if (!date) newErrors.date = 'Starting Date is required';
        if (!division) newErrors.division = 'Division is required';
        if (!company) newErrors.company = 'Company is required';

        // Validate Phone Number
        if (!phone) {
            newErrors.phone = 'Phone Number is required';
        } else {
            const phoneNumberObj = parsePhoneNumberFromString(phone);
            if (!phoneNumberObj) {
                newErrors.phone = 'Phone Number is not valid';
            } else {
                const nationalNumber = phoneNumberObj.nationalNumber;
                const countryCode = phoneNumberObj.country;

                if (!isValidPhoneNumber(nationalNumber, countryCode)) {
                    newErrors.phone = 'Phone Number is not valid';
                } else {
                    const lengthValidation = validatePhoneNumberLength(nationalNumber, countryCode);
                    if (lengthValidation) {
                        newErrors.phone = `Phone Number is ${lengthValidation}`;
                    }
                }
            }
        }

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
                                    {formTitle}
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="id"
                                label="ID"
                                type="text"
                                id="id"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                error={!!errors.id}
                                helperText={errors.id}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={!!errors.email}
                                helperText={errors.email}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="fn"
                                label="First Name"
                                type="text"
                                id="fn"
                                value={fn}
                                onChange={(e) => setFn(e.target.value)}
                                error={!!errors.fn}
                                helperText={errors.fn}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="ln"
                                label="Last Name"
                                type="text"
                                id="ln"
                                value={ln}
                                onChange={(e) => setLn(e.target.value)}
                                error={!!errors.ln}
                                helperText={errors.ln}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={phoneNumber}
                                onChange={handlePhoneChange}
                                defaultCountry="LB"
                                international
                                countryCallingCodeEditable={false}
                                inputComponent={CustomPhoneInput}
                                inputRef={inputRef}
                                style={{ width: '100%' }}
                                error={!!errors.phone}
                                helperText={errors.phone}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="company"
                                label="Company"
                                name="company"
                                autoComplete="company"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                error={!!errors.company}
                                helperText={errors.company}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ mt: 1 }}>
                            <FormControl fullWidth error={!!errors.division}>
                                <InputLabel id="division-select-label">Division</InputLabel>
                                <Select
                                    labelId="division-select-label"
                                    id="division"
                                    name="division"
                                    value={division}
                                    label="Division"
                                    required
                                    onChange={(e) => setDivision(e.target.value)}
                                >
                                    <MenuItem value="IT Support">IT Support</MenuItem>
                                    <MenuItem value="Dev Support/IT">Dev Support/IT</MenuItem>
                                </Select>
                                {errors.division && <Typography color="error" variant="body2">{errors.division}</Typography>}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker
                                    label="Starting Date"
                                    value={startingDate}
                                    onChange={handleDatePickerChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </DemoContainer>
                        </Grid>


                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                {formTitle}
                            </Button>
                        </Grid>

                    </Grid>
                </form>
            </Container>
        </Box>
    );
}

export default UserForm;
