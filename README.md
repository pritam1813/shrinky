# Shrinky

Shrinky is a serverless React app that allows you to create short and memorable URLs from long and complex ones. It is built with Google's serverless technologies, such as Firebase, Cloud Functions, and Firestore.

## Features

- Create custom short URLs with your own keywords or let Shrinky generate them for you
- Manage your short URLs in a user-friendly dashboard
- Track the number of clicks and other analytics for your short URLs
- Share your short URLs with others via email, social media, or QR code

## Demo

You can try out Shrinky online at [this link](https://shrinky-398005.web.app).

## Installation

To run Shrinky locally, you need to have Node.js and npm installed on your machine. You also need to create a Firebase project and enable the following services: Authentication, Hosting, Cloud Functions, and Firestore.

1. Clone this repository to your local machine.
2. Run `npm install` in the root directory to install the dependencies for the React app.
3. Run `npm install` in the `functions` directory to install the dependencies for the Cloud Functions.
4. Create a `.env` file in the root directory and add your Firebase configuration variables. You can find them in the Firebase console under Project settings > General > Your apps > Firebase SDK snippet > Config. The file should look something like this:

```
REACT_APP_API_KEY=AIzaSy...
REACT_APP_AUTH_DOMAIN=shrinky-12345.firebaseapp.com
REACT_APP_PROJECT_ID=shrinky-12345
REACT_APP_STORAGE_BUCKET=shrinky-12345.appspot.com
REACT_APP_MESSAGING_SENDER_ID=1234567890
REACT_APP_APP_ID=1:1234567890:web:abcdef...
REACT_APP_MEASUREMENT_ID=G-ABCDEF
```

5. Run `npm start` in the root directory to start the React app in development mode. It will open a browser window at [http://localhost:3000].
6. Run `firebase emulators:start` in another terminal window to start the Firebase emulators for Authentication, Hosting, Cloud Functions, and Firestore. You can access them at [http://localhost:4000].

## Deployment

To deploy Shrinky to Firebase Hosting, you need to have the Firebase CLI installed and logged in.

1. Run `npm run build` in the root directory to create a production build of the React app.
2. Run `firebase deploy` to deploy the React app and the Cloud Functions to Firebase Hosting.

## License

Shrinky is licensed under the MIT License. See [LICENSE] for more details.

## Contributing

Shrinky is an open source project and contributions are welcome. Please read [CONTRIBUTING.md] for more information on how to contribute.

## Acknowledgements

Shrinky was inspired by [this tutorial] by Fireship.io on how to build a URL shortener with Firebase.