import * as React from "react";
import { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Formik, Form } from "formik";

interface Values {
  firstName: string;
  lastName: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}


export const Forms: React.FC<Props> = ({onSubmit}) => {

    const [file, setFile] = useState();

    const fileReader = new FileReader();

    const handleOnChange = (e: any) => {
        setFile(e.target.files[0]);
    };
    
    async function sendData (values : any, file : any, url : string)  
{
    console.log(values, file, url)
    const body = {
        "First Name": values.firstName,
        "Last Name": values.lastName,
        "Data": file
    }
    await fetch(url, {
      credentials: 'include',
      method: 'POST',
      mode: 'no-cors',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
  }
    const handleCsvSubmit = (file : any, values : any) => {

        if (file) {
            fileReader.onload = function (event : any) {
                const csvOutput = event.target.result;
                sendData(values, csvOutput, "http://localhost:5000/login")
                console.log(csvOutput)
            };

            fileReader.readAsText(file);
        }
    };

    


    return (
    <Formik 
    initialValues={{firstName: '', lastName: ''}} 
    onSubmit={values => {
        onSubmit(values);
        handleCsvSubmit(file, values);
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
                <div>
                 <label id="fileSelect"></label>
                    <input id="fileSelect" type="file" 
                    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, 
                    application/vnd.ms-excel, .txt"
                    onChange={handleOnChange} />
                    
                </div>

        <Button type="submit">submit</Button>

            </Form>
        )}
        
    </Formik>
  );
};
