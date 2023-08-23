import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import withMuiTheme from "@components/withMuiTheme";
import colors from "tailwindcss/colors";
import { useTranslation } from "@/i18n/client";
import { useAppSelector } from "@/hooks";

import Icon from "@components/Icon/Icon";
import InputError from "@components/Inputs/Error";
import { SelectFieldPropsType } from "@components/Inputs/Inputs.types";

function MuiSelectBase({
  name,
  options,
  label,
  required,
  namespace,
  renderValueHandler,
  error,
  ...rest
}: SelectFieldPropsType) {
  const { language } = useAppSelector((state) => state.ui);
  const { t } = useTranslation(language, namespace);

  return (
    <FormControl
      sx={{
        [".MuiOutlinedInput-root"]: {
          borderRadius: "14px",
          height: "48px",
          ["&:focus-within, &.Mui-focused"]: {
            "svg.chevron path": {
              fill: colors.rose[600],
            },
          },
          ["&.Mui-error"]: {
            "svg.chevron path": {
              fill: colors.red[500],
            },
          },
          [".MuiSelect-select"]: {
            padding: "8px !important",
          },
        },
      }}
      error={Boolean(error)}
    >
      <InputLabel id={`${name}-label`} error={Boolean(error)}>
        {label}
      </InputLabel>
      <Select
        IconComponent={() => (
          <div className="p-2">
            <Icon name="chevron-down" size={15} />
          </div>
        )}
        label={label}
        renderValue={
          renderValueHandler
            ? (value) => {
                return renderValueHandler(value, options);
              }
            : undefined
        }
        labelId={`${name}-label`}
        error={Boolean(error)}
        {...rest}
      >
        {options.map((option, index) => (
          <MenuItem
            key={`${name}-opt-${option.value}-${index}`}
            value={option.value}
            sx={(theme) => ({
              ["&.Mui-selected"]: {
                backgroundColor: theme.palette.secondary.light,
                ["&:hover"]: {
                  backgroundColor: colors.amber[200],
                },
              },
            })}
          >
            <div className="flex w-full items-center justify-between gap-2">
              {option.label}
              {option.value === rest.value && (
                <Icon name="check" color={colors.amber[500]} size={20} />
              )}
            </div>
          </MenuItem>
        ))}
      </Select>
      {error && <InputError error={t(error)} />}
    </FormControl>
  );
}

export default withMuiTheme(MuiSelectBase);
