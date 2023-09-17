import Typography from "@/components/Typography";
import get from "lodash/get";
import React from "react";

const getErrorMessage = (errorResponse: any): React.ReactNode => {
  const message = get(errorResponse, "response.data.message", {});

  const errorMessages = [];

  const keys = Object.keys(message);

  const errorContent = (
    <div className="flex flex-col gap-1">
      {keys.map((key) => (
        <div key={`${key}-${message[key]}`} className="flex items-center gap-2">
          <Typography className="font-medium text-white" text={key} />
          <Typography className="text-white" text={message[key]} />
        </div>
      ))}
    </div>
  );

  return errorContent;
};

export default getErrorMessage;
