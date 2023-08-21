import React from "react";
import { useTranslation } from "@/i18n/client";
import { useAppSelector } from "@/hooks";
import InputError from "@components/Inputs/Error";
import withMuiTheme from "@components/withMuiTheme";
import TextField from "@mui/material/TextField";
import { TextFieldPropsType } from "@components/Inputs/Inputs.types";

function TextFieldBase({
  name,
  className,
  error,
  namespace,
  label,
  required,
  ...inputProps
}: TextFieldPropsType) {
  const { language } = useAppSelector((state) => state.ui);
  const { t } = useTranslation(language, namespace);

  return (
    <div className="flex flex-col gap-1">
      <TextField
        sx={{
          ["& .MuiOutlinedInput-root"]: {
            borderRadius: "14px",
            height: 48,
          },
        }}
        label={label ? t(label) : undefined}
        {...inputProps}
        error={Boolean(error)}
      />
      {error && <InputError error={t(error)} />}
    </div>
  );
}

export default withMuiTheme(TextFieldBase);
