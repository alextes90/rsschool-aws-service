import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { products } from "./productList.mock";

const hello = async (event) => {
  return formatJSONResponse({
    products,
    event,
  });
};

export const main = middyfy(hello);
