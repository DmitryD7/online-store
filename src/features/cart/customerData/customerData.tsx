import React from "react";
import {FormikHelpers, useFormik} from "formik";
import {Button, FormControl, FormGroup, FormLabel, TextField} from "@material-ui/core";
import {CustomerDataType} from "../cartItemsTypes";
import s from "./customerData.module.scss"

export const CustomerData = () => {
    const validate = (values: CustomerDataType) => {
        const errors: FormErrorType = {}

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.name) {
            errors.name = 'Required'
        }
        if (!values.surname) {
            errors.surname = 'Required'
        }
        if (!values.address) {
            errors.address = 'Required'
        }
        return errors
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            address: '',
            email: '',
        },
        validate,
        onSubmit: (values, formikHelpers: FormikHelpers<CustomerDataType>) => {
            console.log(JSON.stringify(values))
            alert('DONE')
        }
    })

    return <div className={s.customerData}>
        <form onSubmit={formik.handleSubmit}>
            <FormControl fullWidth={true}>
                <FormLabel>
                    <h3>Enter your data</h3>
                </FormLabel>
                <FormGroup>
                    <TextField
                        label = 'Name'
                        margin = 'normal'
                        color={"secondary"}
                        required
                        {...formik.getFieldProps('name')}
                    />
                    {formik.errors.name ? <div style={{color: 'red'}}>{formik.errors.name}</div> : null}
                    <TextField
                        label = 'Surname'
                        margin = 'normal'
                        color={"secondary"}
                        required
                        {...formik.getFieldProps('surname')}
                    />
                    {formik.errors.surname ? <div style={{color: 'red'}}>{formik.errors.surname}</div> : null}
                    <TextField
                        label = 'Address'
                        margin = 'normal'
                        color={"secondary"}
                        required
                        {...formik.getFieldProps('address')}
                    />
                    {formik.errors.address ? <div style={{color: 'red'}}>{formik.errors.address}</div> : null}
                    <TextField
                        label = 'Email'
                        margin = 'normal'
                        color={"secondary"}
                        required
                        {...formik.getFieldProps('email')}
                    />
                    {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                    <Button type={"submit"} variant={"outlined"} color={"secondary"}>Send</Button>
                </FormGroup>
            </FormControl>
        </form>
    </div>
}

type FormErrorType = {
    name?: string
    surname?: string
    address?: string
    email?: string
}