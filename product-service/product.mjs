import { products } from "./productList.mock.mjs";

export const handler = async (event) => {
  const productId = event.pathParameters?.id;
  const product = products.find((el) => el.id === productId);
  return {
    statusCode: 200,
    body: JSON.stringify(product),
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    },
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
