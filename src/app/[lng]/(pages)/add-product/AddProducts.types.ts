import React from "react";

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
  handleNext: (callback?: () => void) => void;
};
