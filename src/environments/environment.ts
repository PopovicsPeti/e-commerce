// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Config } from './config.interface';

export const environment: Config = {
  production: false,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
