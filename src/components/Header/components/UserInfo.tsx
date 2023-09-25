import React from "react";
import loGet from "lodash/get";
import { useAuth } from "@/hooks";
import Avatar from "@/components/Avatar";
import Typography from "@/components/Typography";

type UserInfoProps = {
  showDetails?: boolean;
};

export default function UserInfo({ showDetails }: UserInfoProps) {
  const { user } = useAuth();
  return (
    <div className="flex items-center gap-2">
      <Avatar
        image={loGet(user, "media.original", null)}
        username={loGet(user, "name", "")}
        isLink
      />
      {showDetails && (
        <div className="flex flex-col">
          <Typography
            className="!leading-5 font-medium capitalize"
            text={loGet(user, "name", "")}
          />
          <Typography
            className="!leading-4"
            text={loGet(user, "email", "")}
            color="light"
          />
        </div>
      )}
    </div>
  );
}
