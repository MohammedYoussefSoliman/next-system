import get from "lodash/get";

const getErrorMessage = (errorResponse: any): string[] => {
  const message = get(errorResponse, "response.data.message", {});

  const errorMessages = [];

  for (let key in message) {
    errorMessages.push(`${key}: ${message[key]}`);
  }

  return errorMessages;
};

export default getErrorMessage;
