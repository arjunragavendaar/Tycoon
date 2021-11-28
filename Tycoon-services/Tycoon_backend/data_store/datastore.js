const keyreference=require('../Db Configuration/dbconfig.js');
var registerusersRef = keyreference.ref.child("registered_users");
var timelineRef=keyreference.ref.child("timeline");

module.exports={registerusersRef,timelineRef};