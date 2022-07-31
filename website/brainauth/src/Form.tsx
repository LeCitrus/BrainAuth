import * as React from "react";
import {TextField, Button} from "@material-ui/core";
import {Formik, Form} from 'formik'

interface Values {
    firstName: string;
    lastName: string;
}

interface Props {
    onSubmit: (values: Values) => void;

}

export const Forms: React.FC<Props> = ({onSubmit}) => {
    return (
    <Formik 
    initialValues={{firstName: '', lastName: ''}} 
    onSubmit={values => {
        onSubmit(values);
    }}
    >
     {({values, handleChange, handleBlur}) => (
            <Form>
                <div>
                <TextField
                 placeholder="First Name"
                 name="firstName" 
                 value={values.firstName} 
                 onChange={handleChange}
                 onBlur={handleBlur}
                 />
                </div>
                <div>
                 <TextField
                 placeholder="Last Name"
                 name="lastName" 
                 value={values.lastName} 
                 onChange={handleChange}
                 onBlur={handleBlur}
                 />
                 </div>
        <Button type="submit">submit</Button>

            </Form>
        )}
        
    </Formik>

    );
}