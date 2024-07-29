import React from 'react';
import UserForm from '../components/UserForm';

function CreateUserPage() {
    return <UserForm defaultValues isEditDialog={false}/>;
}

export default CreateUserPage;
