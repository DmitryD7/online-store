import React, {useState} from "react";
import {FormikHelpers, useFormik} from "formik";
import {Button, createStyles, FormControl, FormGroup, FormLabel, makeStyles, TextField, Theme} from "@material-ui/core";
import {CustomerDataType} from "../cartItemsTypes";
import s from "./customerData.module.scss"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../application/types";
import {Alert} from "@material-ui/lab";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export const CustomerData = () => {
    const cartData = useSelector<AppRootStateType>(state => state.cart)

    const [isDone, setIsDone] = useState(false)

    const validate = (customerData: CustomerDataType) => {
        const errors: FormErrorType = {}

        if (!customerData.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(customerData.email)) {
            errors.email = 'Invalid email address';
        }
        if (!customerData.name) {
            errors.name = 'Required'
        }
        if (!customerData.surname) {
            errors.surname = 'Required'
        }
        if (!customerData.address) {
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
        onSubmit: (customerData, formikHelpers: FormikHelpers<CustomerDataType>) => {
            console.log(JSON.stringify({cartData, customerData}))
            formikHelpers.resetForm(undefined)
            setIsDone(true)
        }
    })

    if (isDone) {
        return <SuccessAlert/>
    }

    return <div className={s.customerData}>
        <form onSubmit={formik.handleSubmit}>
            <FormControl fullWidth={true}>
                <FormLabel>
                    <h3>Enter your data</h3>
                </FormLabel>
                <FormGroup>
                    <TextField
                        label='Name'
                        margin='normal'
                        color={"secondary"}
                        required
                        {...formik.getFieldProps('name')}
                    />
                    {formik.errors.name ? <div style={{color: 'red'}}>{formik.errors.name}</div> : null}
                    <TextField
                        label='Surname'
                        margin='normal'
                        color={"secondary"}
                        required
                        {...formik.getFieldProps('surname')}
                    />
                    {formik.errors.surname ? <div style={{color: 'red'}}>{formik.errors.surname}</div> : null}
                    <TextField
                        label='Address'
                        margin='normal'
                        color={"secondary"}
                        required
                        {...formik.getFieldProps('address')}
                    />
                    {formik.errors.address ? <div style={{color: 'red'}}>{formik.errors.address}</div> : null}
                    <TextField
                        label='Email'
                        margin='normal'
                        color={"secondary"}
                        required
                        {...formik.getFieldProps('email')}
                    />
                    {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                    <Button type={"submit"} variant={"outlined"} color={"secondary"}>buy now</Button>
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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '50%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
            position: 'absolute',
            top: '65px'
        },
        alert: {
            height: '50px',
            fontSize: '20px',
            display: 'flex',
            justifyContent: 'center',
        },
        button: {
            position: 'absolute',
            top: '13px',
            right: '5px'
        }
    }),
)
export const SuccessAlert = () => {
    const [isAlert, setIsAlert] = useState(true)
    const classes = useStyles()
    return <>
        {isAlert && <div className={classes.root}>
            <Alert variant="filled" severity="success" className={classes.alert}>
                <Button className={classes.button} color={"inherit"}
                        onClick={() => setIsAlert(false)}><HighlightOffIcon/></Button>
                Success
            </Alert>
        </div>}
    </>
}