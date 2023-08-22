"use client";
import React from "react";
import Form from "@components/Form/Form";
import {
  TextField,
  SelectField,
  EmailField,
  DialCode,
} from "@components/Inputs";

export default function RegisterForm() {
  return (
    <Form
      onSubmit={(data) => {
        console.log(data);
      }}
      className="w-full"
    >
      {({ control }) => (
        <div className="flex flex-col gap-4 w-full">
          <TextField
            name="fullName"
            label="fullName"
            control={control}
            required
          />
          <EmailField name="email" label="email" control={control} required />
          <div className="flex gap-4 w-full">
            <div className="grow">
              <TextField
                name="phoneNumber"
                label="phoneNumber"
                type="number"
                validationRules={{
                  minLength: {
                    value: 9,
                    message: "minLength9",
                  },
                  maxLength: {
                    value: 12,
                    message: "maxLength12",
                  },
                }}
                control={control}
                required
              />
            </div>
            <DialCode control={control} />
          </div>
        </div>
      )}
    </Form>
  );
}
