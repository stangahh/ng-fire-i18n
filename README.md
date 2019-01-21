# ng-fire-i18n

Forked from [Firestarter](https://github.com/codediodeio/angular-firestarter) | FireStarter is an Angular PWA powered by Firebase.

## Features

- Angular 7.x
- 100 PWA Lighthouse Score with NGSW
- Firebase Auth, Storage, and Cloud Firestore Demos
- Angular Universal Prerendered SSR (deployed to Firebase Static Hosting)
- End-to-End Testing with Cypress.io
- Continuous Integration with CircleCI

## Usage

1.  Run

- `git clone https://github.com/stangahh/ng-fire-i18n.git firestarter`
- `cd firestarter`
- `npm install`

2.  Create a project at https://firebase.google.com/ and grab your web config:

![](https://angularfirebase.com/wp-content/uploads/2017/04/firebase-dev-prod-credentials.png)

3.  Add the config to your Angular environment

#### src/environments/environment.ts

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: 'APIKEY',
    authDomain: 'DEV-APP.firebaseapp.com',
    databaseURL: 'https://DEV-APP.firebaseio.com',
    projectId: 'DEV-APP',
    storageBucket: 'DEV-APP.appspot.com',
    messagingSenderId: '123456789'
  }
};
```

4.  And finally `ng serve`

## TODO

- i18n
- Logged in (and permissioned) user to edit data in Firestore
