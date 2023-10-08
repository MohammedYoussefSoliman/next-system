import React from "react";
import { Trans } from "react-i18next";
import { useFormContext } from "react-hook-form";
import i18next from "i18next";
import { useTranslation } from "@i18n/client";
import Typography from "@/components/Typography";
import AuctionRadio from "../../UI/AuctionRadio";

export default function ActualAuction() {
  const { watch } = useFormContext();
  const lng = i18next.language;
  const { t } = useTranslation(lng);

  const mainAuctionValue = watch("mainAuctionType");

  if (!mainAuctionValue) return null;

  return (
    <div className="flex flex-col w-full gap-4">
      <Trans
        i18nKey="actualAuctionTitle"
        t={t}
        values={{ type: t(watch("mainAuctionType")) }}
        components={{
          auctionTitle: <Typography as="h6">placeholder</Typography>,
        }}
      />
      {mainAuctionValue === "live" ? (
        <AuctionRadio
          name="type"
          radios={[
            {
              label: "normalAuction",
              value: "normal",
              icon: "hammer",
              description: "normalAuctionDefinition",
            },
            {
              label: "fastAuction",
              value: "fast",
              icon: "timer",
              description: "fastAuctionDefinition",
            },
          ]}
          validationRules={{ required: "auctionTypeRequired" }}
        />
      ) : (
        <AuctionRadio
          name="type"
          radios={[
            {
              label: "bidding",
              value: "bidding",
              icon: "hammer",
              description: "biddingDefinition",
            },
            {
              label: "fixedPrice",
              value: "fixed-price",
              icon: "money-time",
              description: "fixedPriceDefinition",
            },
          ]}
          validationRules={{ required: "auctionTypeRequired" }}
        />
      )}
    </div>
  );
}
