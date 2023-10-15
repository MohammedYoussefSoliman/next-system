import React from "react";
import { classNames, mediaSizes } from "@/utils";
import Drawer from "@/components/Drawer";
import Typography from "@/components/Typography";
import Icon from "@/components/Icon";
import { IconButton } from "@components/Button";
import Tabs, { TabPanel } from "@components/Tabs";
import SizesInput from "./SizesInput";
import { DrawerProps } from "../../../AddProducts.types";

export default function DrawerInput({ label, name }: DrawerProps) {
  const classes = classNames([
    "rounded-xl",
    "border",
    "border-gray-300",
    "px-3",
    "h-[50px]",
    "flex",
    "items-center",
    "gap-1",
    "hover:bg-orange-50",
    "cursor-pointer",
    "w-full",
  ]);
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
  return (
    <>
      <button onClick={() => setOpenDrawer(true)} className={classes}>
        <div className="flex-1 flex gap-1 items-center justify-center">
          <Typography as="p2" text={label} />
          <Typography as="p2" text="optional" color="light" />
        </div>
        <Icon name="drawer" />
      </button>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          [".MuiPaper-root"]: {
            borderRadius: "0 !important",
            width: "100%",
            padding: "24px 40px",
            [mediaSizes.md]: {
              width: 520,
              borderTopRightRadius: "25px !important",
              borderBottomRightRadius: "25px !important",
            },
          },
        }}
      >
        <div className="flex items-center w-full pt-2 pb-4 gap-1">
          <IconButton
            icon="times"
            variant="transparent"
            iconColor="inherit"
            size="small"
            className="enabled:hover:bg-slate-100"
            onClick={() => setOpenDrawer(false)}
          />
          <div className="flex-1 flex items-center justify-center">
            <Typography as="h5" text="chooseTypeSize" capitalizeFirstLetter />
          </div>
        </div>
        <Tabs defaultValue="child">
          <TabPanel value="child" label="child" icon="child">
            <SizesInput name={name} type="child" />
          </TabPanel>
          <TabPanel value="adult" label="adult" icon="adult">
            <SizesInput name={name} type="adult" />
          </TabPanel>
        </Tabs>
      </Drawer>
    </>
  );
}
