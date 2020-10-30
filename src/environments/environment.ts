// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const KEY_PUBLIC = 'a0e9170944529ad94ef26f5e5bd6c0b4';
export const HASH = 'B9FFC290E8AF470961C5566A0559DAB1';
export const URL_API = `https://gateway.marvel.com:443/v1/public/characters?apikey=${KEY_PUBLIC}&hash=${HASH}`;


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
