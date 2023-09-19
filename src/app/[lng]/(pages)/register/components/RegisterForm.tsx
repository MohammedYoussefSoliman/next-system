"use client";
import React from "react";
import _get from "lodash/get";
import Form from "@components/Form";
import {
  TextField,
  PasswordField,
  EmailField,
  DialCode,
} from "@components/Inputs";
import { useAppDispatch, useNavigation, useDeviceInfo } from "@/hooks";
import registerService from "@appState/slices/auth/registerService";
import { Button } from "@/components/Button";
import Typography from "@/components/Typography";
import OAuth from "@/components/OAuth";
import Link from "@/components/Link";
import RedirectAuthStatement from "@/components/RedirectAuthStatement";
import Or from "@/components/Or";

export default function RegisterForm() {
  const deviceInfo = useDeviceInfo();
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
  const { navigate } = useNavigation();
  const dispatch = useAppDispatch();
  return (
    <Form
      onSubmit={(data) => {
        delete data.confirmPassword;
        const registerData = {
          ...deviceInfo,
          ...data,
          country_code: +data.country_code.substring(1),
        };
        dispatch(
          registerService({
            formData: registerData,
            setLoading(value) {
              setIsSubmitting(value);
            },
            showSuccessMessage: true,
            onSuccess() {
              navigate("/register/verify-phone");
            },
          })
        );
      }}
      defaultValues={{
        country_code: "+971",
      }}
      className="w-full"
    >
      {({ control, setValue }) => (
        <div className="flex flex-col gap-4 w-full">
          <TextField
            name="name"
            label="fullName"
            namespace="register"
            control={control}
            required
          />
          <EmailField name="email" label="email" control={control} required />
          <div className="flex gap-4 w-full">
            <div className="grow">
              <TextField
                name="phone"
                label="phoneNumber"
                namespace="register"
                type="number"
                validationRules={{
                  minLength: {
                    value: 9,
                    message: "phoneNumberMinLength",
                  },
                  maxLength: {
                    value: 12,
                    message: "phoneNumberMaxLength",
                  },
                }}
                control={control}
                required
              />
            </div>
            <DialCode
              control={control}
              changeHandler={(country) => setValue("country_key", country.code)}
            />
          </div>
          <PasswordField
            control={control}
            name="password"
            label="password"
            validationRules={{
              minLength: {
                value: 6,
                message: "passwordMinLength",
              },
            }}
            required
          />
          <PasswordField
            control={control}
            name="confirmPassword"
            label="confirmPassword"
            validationRules={{
              minLength: {
                value: 6,
                message: "passwordMinLength",
              },
            }}
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
              name="came_by"
              label="inviteCode"
              namespace="register"
              control={control}
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
          <Button
            loading={isSubmitting}
            namespace="register"
            size="large"
            className="capitalize pt-4"
          >
            create
          </Button>
          <Or />
          <OAuth provider="google" mode="register" />
          <OAuth provider="apple" mode="register" />
          <RedirectAuthStatement type="login" />
        </div>
      )}
    </Form>
  );
}
