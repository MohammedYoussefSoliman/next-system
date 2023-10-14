import React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import withMuiTheme from "@/components/withMuiTheme";
import colors from "tailwindcss/colors";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Icon from "@/components/Icon";
import Error from "../Error";
import Label from "../Label";
import { DateInputProps } from "../Inputs.types";

function PickerIcon() {
  return <Icon name="calendar" />;
}

function DateInput({
  onChange,
  value,
  label,
  error,
  required,
}: DateInputProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="w-full flex flex-col gap-2">
        {label && typeof label === "string" ? (
          <Label label={label} required={required} />
        ) : (
          label
        )}
        <DatePicker
          value={value}
          views={["year", "month", "day"]}
          onChange={(dateValue) => {
            if (onChange) onChange(dateValue);
          }}
          slots={{
            openPickerIcon: PickerIcon,
          }}
          slotProps={{
            openPickerButton: {
              disableRipple: true,
            },
            textField: {
              sx: {
                ["& .MuiOutlinedInput-root"]: {
                  borderRadius: "14px",
                  height: 46,
                  "&:hover": {
                    background: colors.amber[50],
                  },
                },
              },
              focused: false,
              error: Boolean(error),
            },
          }}
        />
        {error && <Error error={error} />}
      </div>
    </LocalizationProvider>
  );
}

export default withMuiTheme<DateInputProps>(DateInput);
