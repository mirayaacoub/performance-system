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

function UserForm({ formTitle = 'Create User', onLogin, showSubmitButton = true, defaultValues = {
    defaultId: '',
    defaultEmail: '',
    defaultFn: '',
    defaultLn: '',
    defaultPhoneNumber: '',
    defaultCompany: '',
    defaultDivision: '',
    defaultStartingDate: dayjs()
} }) {

    const [id, setId] = useState(defaultValues.defaultId);
    const [email, setEmail] = useState(defaultValues.defaultEmail);
    const [fn, setFn] = useState(defaultValues.defaultFn);
    const [ln, setLn] = useState(defaultValues.defaultLn);
    const [phoneNumber, setPhoneNumber] = useState(defaultValues.defaultPhoneNumber);
    const [company, setCompany] = useState(defaultValues.defaultCompany);
    const [division, setDivision] = useState(defaultValues.defaultDivision);
    const [startingDate, setStartingDate] = useState(dayjs(defaultValues.defaultStartingDate));
    const [users, setUsers] = useState([]);
    const [errors, setErrors] = useState({});
    const inputRef = useRef(null);

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

        setUsers([...users, userData]);
        onLogin([...users, userData]);
        reset();
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
                const countryCode = phoneNumberObj.country; // Typically 'LB' for Lebanon

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

                        <Grid item xs={6}>
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
                        <Grid item xs={6}>
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
                        <Grid item xs={6}>
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
                        <Grid item xs={6}>
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
                        <Grid item xs={6}>
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
                        <Grid item xs={6}>
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
                        <Grid item xs={6} sx={{ mt: 1 }}>
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
                        <Grid item xs={6}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker
                                    label="Starting Date"
                                    value={startingDate}
                                    onChange={handleDatePickerChange}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            required
                                            error={!!errors.date}
                                            helperText={errors.date}
                                        />
                                    )}
                                />
                            </DemoContainer>
                        </Grid>
                        {showSubmitButton && (
                            <Grid item xs>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Create User
                                </Button>
                            </Grid>
                        )}
                    </Grid>
                </form>
            </Container>
        </Box>
    );
}

export default UserForm;
