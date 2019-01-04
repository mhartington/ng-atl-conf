// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  API_URL: 'http://ngatl.beeman.nl/api/v1/',
  baseRoutePath: '',
  firebase: {
    apiKey: 'AIzaSyC477JvW1MzSMf6z3FsNRjYFdDGFAgO_AY',
    authDomain: 'ngatl-1954b.firebaseapp.com',
    databaseURL: 'https://ngatl-1954b.firebaseio.com',
    projectId: 'ngatl-1954b',
    storageBucket: 'ngatl-1954b.appspot.com',
    messagingSenderId: '44586341428'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
