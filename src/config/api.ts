export const heading: string = "currency converter";
const API_DOMAIN: string = "https://v6.exchangerate-api.com/v6";
const API_KEY: string = "90bff7a2c46956b1f397cf21";
export const endpointPath = (from: string): string =>
  `${API_DOMAIN}/${API_KEY}/latest/${from}`;
