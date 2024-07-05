import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://n6nzzwc7ok.execute-api.eu-north-1.amazonaws.com/default/getProductsbyid/',
    order: 'https://7l2y2obr65.execute-api.eu-north-1.amazonaws.com/dev/',
    import: 'https://bg1iuwjmod.execute-api.eu-north-1.amazonaws.com/default/',
    bff: 'https://yc1b9wcf50.execute-api.eu-north-1.amazonaws.com/default/',
    cart: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
  },
  apiEndpointsEnabled: {
    product: true,
    order: true,
    import: true,
    bff: true,
    cart: false,
  },
};
