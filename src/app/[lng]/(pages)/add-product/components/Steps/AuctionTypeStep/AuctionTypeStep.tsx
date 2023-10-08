"use client";
import React from "react";
import Step from "../../UI/Step";
import AuctionRadio from "../../UI/AuctionRadio";
import ActualAuction from "./ActualAuction";

export default function AuctionTypeStep() {
  return (
    <Step
      title="addProduct"
      subTitle="chooseAuction"
      stepNames={["mainAuctionType", "type"]}
    >
      <div className="w-full flex flex-col gap-8">
        <AuctionRadio
          name="mainAuctionType"
          radios={[
            {
              label: "live",
              value: "live",
              icon: "camera",
              description: "liveAuctionDefinition",
            },
            {
              label: "hot",
              value: "hot",
              icon: "flash",
              description: "hotSaleDefinition",
            },
          ]}
          validationRules={{ required: "mainAuctionTypeRequired" }}
        />
        <ActualAuction />
      </div>
    </Step>
  );
}
