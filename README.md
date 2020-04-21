This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to set up the app:

#### Create and Setup Firebase project

Firebase is used in this project to store user ids, full name and email in the user list, so the users added to this app only would be displayed in the list.

- Go to https://console.firebase.google.com
- Click `Add Project` button
- Add project name, follow the steps displayed
- Under 'Get started by adding Firebase to your app..' choose `Web` icon, create web project
- Add a name to the Project
- Save the API keys (you can find them later in project settings)

```
  var firebaseConfig = {
    apiKey: "example-api-key",
    authDomain: "example-domain.firebaseapp.com",
    databaseURL: "https://example-urk.firebaseio.com",
    projectId: "example-id",
    storageBucket: "example-bucket-id",
    messagingSenderId: "example-sender-id",
    appId: "example-app-id",
    measurementId: "example-measurement-id"
  };
```

#### Rename `.env.example` to `.env` in the root folder:

#### Add the keys in `.env` file in the root folder:

```
REACT_APP_API_URL=https://api.argyle.io/v1
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_DATABASE_URL=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_PLUGIN_KEY=
```

- `REACT_APP_FIREBASE_API_KEY`, `REACT_APP_FIREBASE_DATABASE_URL`, `REACT_APP_FIREBASE_AUTH_DOMAIN`, `REACT_APP_FIREBASE_PROJECT_ID`- use 'apiKey, databaseURL, authDomain, projectId' which you retrieved from firebase setup (or settings in your created app).
- `REACT_APP_PLUGIN_KEY` - go to https://console.argyle.io and copy the `plugin_key` value from API Keys, the `client_id` and `client_secret` keys will be used for signing in.

## Start the app:

Run:

#### `npm install`

Installs all the dependencies for the project.

#### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
re
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `firebase deploy`

Run this command to deploy the app on firebase. `npm run build` should be run before that.
For this to work you need to install firebase tools globally
`npm install -g firebase-tools`

<details open><summary>Sign In Demo</summary>
  <p align="center">
    <img src="./demo-gifs/sign_in.gif" alt="A gif to show sign in process">
  </p>
</details>

<details open><summary>Profile Demo</summary>
  <p align="center">
    <img src="./demo-gifs/profile.gif" alt="A gif to profile">
  </p>
</details>

<details open><summary>Plugin Demo</summary>
  <p align="center">
    <img src="./demo-gifs/plugin.gif" alt="A gif to plugin">
  </p>
</details>
