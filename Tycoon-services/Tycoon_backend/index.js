const express = require('express')
const postservice=require('./services/postservice.js')
const refval=require('./Db Configuration/dbconfig.js')
const dataval=require('./data_store/datastore.js')



const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.post('/createpost', (req, res) => {
    let postresponse=postservice.postservice(dataval,req.body);
    postresponse.then(function(response){
      res.send(true);
    })
  
});

app.get('/fetchposts', (req, res) => {
  dataval.timelineRef.once('value', (snapshot) => {
    res.send(snapshot.val());
  }, (errorObject) => {
    res.send((errorObject.name));
  }); 

});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
