"use client";
import React from "react";
import Step from "../../UI/Step";
import AuctionRadio from "../../UI/AuctionRadio";
import MainAuction from "./MainAuction";

export default function AuctionTypeStep() {
  return (
    <Step
      title="addProduct"
      subTitle="chooseSellingType"
      stepNames={["mainAuctionType", "type", "sellingJourney"]}
    >
      <div className="w-full flex flex-col gap-8">
        <AuctionRadio
          name="sellingJourney"
          radios={[
            {
              label: "auction",
              value: "auction",
              icon: "hammer",
              description: "liveAuctionDefinition",
            },
            {
              label: "marketPlace",
              value: "selling",
              icon: "market",
              description: "sellingMarketDefinition",
            },
          ]}
          validationRules={{ required: "sellingTypeRequired" }}
        />
        <MainAuction />
      </div>
    </Step>
  );
}
