var firebase = require("firebase-admin");

const serviceAccount = require("../serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://tycoon-33bb8-default-rtdb.europe-west1.firebasedatabase.app/'
});
var db = firebase.database();

var ref = db.ref("server/tycoon-data/");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

module.exports={ref};
