"use client";
import React from "react";
import Form from "@components/Form";
import {
  TextField,
  PasswordField,
  EmailField,
  DialCode,
} from "@components/Inputs";
import { Button } from "@/components/Button";
import Typography from "@/components/Typography";

import Or from "./Or";
import Link from "@/components/Link/Link";

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
            namespace="register"
            control={control}
            required
          />
          <EmailField
            name="email"
            label="email"
            control={control}
            namespace="register"
            required
          />
          <div className="flex gap-4 w-full">
            <div className="grow">
              <TextField
                name="phoneNumber"
                label="phoneNumber"
                namespace="register"
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
          <PasswordField
            control={control}
            namespace="register"
            name="password"
            label="password"
            required
          />
          <PasswordField
            control={control}
            name="confirmPassword"
            label="confirmPassword"
            namespace="register"
            required
          />
          <div className="flex flex-col mt-10 mb-6 gap-4">
            <Typography
              className="font-medium"
              as="h4"
              text="inviteCode"
              namespace="register"
            />
            <Typography
              className="text-gray-400"
              text="inviteDescription"
              namespace="register"
            />
            <TextField
              name="inviteCode"
              label="inviteCode"
              namespace="register"
              control={control}
              required
            />
          </div>
          <span className="inline">
            <Typography
              className="inline"
              color="light"
              text="By clicking on Create you are accept in our "
            />
            <Link
              className="inline"
              label="Terms and Condition , Privacy Policy"
              to="/terms"
            />
          </span>
          <Button namespace="register" size="large" className="capitalize pt-4">
            create
          </Button>
          <Or />
        </div>
      )}
    </Form>
  );
}
