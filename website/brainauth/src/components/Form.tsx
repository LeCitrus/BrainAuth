import * as React from "react";
import { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import { DataPoint } from "../models/types";

interface Values {
  firstName: string;
  lastName: string;
}

interface Props {
  setData: React.Dispatch<React.SetStateAction<DataPoint[] | undefined>>;
  onSubmit: (values: Values) => void;
}

export const Forms: React.FC<Props> = ({ setData, onSubmit }) => {
  const [file, setFile] = useState();

  const fileReader = new FileReader();

  const handleOnChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const parseCsvOutput = (output: string) => {
    return output.split("\n").map((entry) => {
      let data = entry.split(",");
      if (data) {
        return {
          timestamp: data[0] ? parseFloat(data[0].replace('"', "")) : 0,
          value: data[1] ? parseFloat(data[1].replace('"', "")) : 0,
        };
      } else {
        return {
          timestamp: 0,
          value: 0,
        };
      }
    });
  };

  async function sendData(values: any, file: any, url: string) {
    console.log(values, file, url);
    const body = {
      "First Name": values.firstName,
      "Last Name": values.lastName,
      Data: file,
    };
    await fetch(url, {
      credentials: 'include',
      method: 'POST',
      mode: 'no-cors',
      headers:{
        'Content-Type': 'form-data'
      },
      body: file
    })
  }
    const handleCsvSubmit = (file : any, values : any) => {

        if (file) {
            fileReader.onload = function (event : any) {
                const csvOutput = event.target.result;
                console.log(csvOutput)
            };

            // fileReader.readAsText(file);
            var data = new FormData()
            data.append('file', file)
            sendData(values, data, "http://localhost:5000/login")
// let parsed = parseCsvOutput(csvOutput);
// setData(parsed);

        }
    };

  return (
    <Formik
      initialValues={{ firstName: "", lastName: "" }}
      onSubmit={(values) => {
        onSubmit(values);
        handleCsvSubmit(file, values);
      }}
    >
      {({ values, handleChange, handleBlur }) => (
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
            <input
              id="fileSelect"
              type="file"
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, 
                    application/vnd.ms-excel, .txt"
              onChange={handleOnChange}
            />
          </div>

          <Button type="submit">submit</Button>
        </Form>
      )}
    </Formik>
  );
};
