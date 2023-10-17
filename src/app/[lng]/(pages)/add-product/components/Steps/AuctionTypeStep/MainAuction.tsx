import React from "react";
import { Trans } from "react-i18next";
import { useFormContext } from "react-hook-form";
import i18next from "i18next";
import { useTranslation } from "@i18n/client";
import Typography from "@/components/Typography";
import AuctionRadio from "../../UI/AuctionRadio";
import ActualAuction from "./ActualAuction";

export default function MainAuction() {
  const { watch } = useFormContext();
  const lng = i18next.language;
  const { t } = useTranslation(lng);

  const sellingJourney = watch("sellingJourney");

  if (!sellingJourney) return null;

  return (
    <div className="flex flex-col w-full gap-4">
      {sellingJourney === "selling" ? (
        <>
          <Typography as="h6" text="chooseSellingWay" />
          <AuctionRadio
            name="type"
            radios={[
              {
                label: "wholeSaleFullQuantity",
                value: "wholesale_full_quantity",
                icon: "multi-product",
                description: "wholeSaleFullQuantityDefinition",
              },
              {
                label: "wholeSaleByBox",
                value: "wholesale_by_box",
                icon: "product",
                description: "wholeSaleByBoxDefinition",
              },
              {
                label: "wholeSaleByPiece",
                value: "retail_by_piece",
                icon: "box",
                description: "wholeSaleByPieceDefinition",
              },
            ]}
            validationRules={{ required: "auctionTypeRequired" }}
          />
        </>
      ) : (
        <>
          <Typography as="h6" text="chooseAuction" />
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
        </>
      )}
      <ActualAuction />
    </div>
  );
}
