import React from "react";
import { Control, UseFormWatch } from "react-hook-form";
import type { FormValidationRules } from "@/components/Inputs/Inputs.types";
import type { IconType } from "@components/Icon/Icon.types";

export type AddProductForm = {
  name: string;
  price: number;
  status: "created" | "draft" | "blocked" | "active" | "confirmed";
  currency_id: number;
  exchange_policy: string;
  code: number;
  country_id: number;
  state_id: number;
  city_id: number;
  address: string;
  live_duration: number;
  starting_bid: number;
  bid_increase: number;
  estimated_price: number;
  down_payment: number;
  selling_type: "under_approval" | "estimation_value" | "highest_price";
  type: "normal" | "fast" | "bidding" | "fixed_price";
  productType: "single" | "multi";
  mainAuctionType: "live" | "hot";
  description: string;
  quantity: number;
  unit: string;
  live_started_at: string;
  live_finished_at: string;
  budge_id: number;
  live_type: "video" | "audio" | "robot";
  show_phone: boolean;
  bonus_times: number;
  stage: "active" | "for_approval" | "reschedule" | "sold";
  category_id: number;
};

export type StepProps = {
  title?: string;
  subTitle?: string;
  children: React.ReactNode;
  handleNext?: (callback?: () => void) => void;
  stepNames?: string | string[];
};

export type CheckboxProps = {
  name: string;
  value: string | number;
  image: string;
  title: string;
};

export type CheckListProps = {
  name: string;
  checkItems: Omit<CheckboxProps, "name">[];
};

export type AuctionRadioProps = {
  name: string;
  radios: {
    label: string;
    description?: string;
    icon: IconType;
    value: string | number;
  }[];
  validationRules?: Partial<FormValidationRules>;
};

export type RadioPillProps = Omit<AuctionRadioProps, "radios"> & {
  label: string;
  radios: {
    label: string;
    value: string | number;
  }[];
};
export type SizeCheckboxProps = {
  label: string;
  description?: string;
  value: string | number;
  name: string;
  validationRules?: Partial<FormValidationRules>;
};

export type SizeChecks = {
  name: string;
  checkboxes: Omit<SizeCheckboxProps, "name" | "validationRules">[];
  validationRules?: Partial<FormValidationRules>;
};

export type SizesInputProps = {
  name: string;
  type: "child" | "adult";
};

export type Option = {
  id: number;
  has_child: boolean;
  name: string;
};

export type Property = {
  id: number;
  parent_id: number | string | null;
  type: "list" | "text" | "size" | "date" | "country_made";
  name: string;
  options: Option[];
};

export type DynamicPropsType = {
  type: "list" | "text" | "size" | "country" | "date" | "radio";
  id: number | string;
  name: string;
  options: Option[];
  control: Control<any>;
  watch: UseFormWatch<any>;
  getProperties: (id: number, isMainOpt?: boolean) => void;
  mainOptionIdes?: number[];
};

export type PropertiesProps = {
  properties: Property[];
  control: Control<any>;
  watch: UseFormWatch<any>;
};

export type PropertyProps = {
  property: Property;
  control: Control<any>;
  watch: UseFormWatch<any>;
  type: "list" | "text" | "size" | "country" | "date" | "radio";
};

export type DrawerProps = {
  name: string;
  label: string;
};
