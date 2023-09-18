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
import { useAppDispatch, useNavigation } from "@/hooks";
import { formDataHandler } from "@/utils";
import registerService from "@appState/slices/auth/registerService";
import { deviceType, isAndroid, isIOS } from "react-device-detect";
import { Button } from "@/components/Button";
import Typography from "@/components/Typography";
import OAuth from "@/components/OAuth";
import Link from "@/components/Link";
import RedirectAuthStatement from "@/components/RedirectAuthStatement";
import Or from "./Or";

export default function RegisterForm() {
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
  const { navigate } = useNavigation();
  const dispatch = useAppDispatch();
  return (
    <Form
      onSubmit={(data) => {
        delete data.confirmPassword;
        const device_type = deviceType;
        const platform = isAndroid ? "android" : isIOS ? "ios" : "web";
        const device_id = _get(window, "navigator.platform", "");
        const registerData = {
          ...data,
          device_id,
          device_type,
          platform,
          country_code: +data.country_code.substring(1),
        };
        dispatch(
          registerService({
            formData: formDataHandler(registerData),
            setLoading(value) {
              setIsSubmitting(value);
            },
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
                name="phone"
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
            <DialCode
              control={control}
              changeHandler={(country) => setValue("country_key", country.code)}
            />
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
          <OAuth provider="google" />
          <OAuth provider="apple" />
          <RedirectAuthStatement type="login" />
        </div>
      )}
    </Form>
  );
}
