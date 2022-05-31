const admin = require('firebase-admin');

// import { googleApplicationCredentials } from './settings';

const serviceAccount = require('./crendential.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // databaseURL: 'https://push-notifications-article.firebaseio.com',
  // Ajustar base de datos
});

module.exports = admin.messaging();