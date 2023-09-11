import get from "lodash/get";

const getErrorMessage = (errorResponse: any): string[] =>
  get(errorResponse, "data.message.txt", []);

export default getErrorMessage;
