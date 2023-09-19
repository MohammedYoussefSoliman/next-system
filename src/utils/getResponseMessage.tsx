import Typography from "@/components/Typography";
import get from "lodash/get";
import React from "react";

const getResponseMessage = (
  response: any,
  error?: boolean
): React.ReactNode => {
  const message = error
    ? get(response, "response.data.message", {})
    : get(response, "message", {});

  const keys = Object.keys(message);

  const content = (
    <div className="flex flex-col gap-1">
      {keys.map((key) => (
        <div key={`${key}-${message[key]}`} className="flex items-center gap-2">
          {error && (
            <Typography className="font-medium text-white" text={key} />
          )}
          <Typography className="text-white" text={message[key]} />
        </div>
      ))}
    </div>
  );

  return content;
};

export default getResponseMessage;
