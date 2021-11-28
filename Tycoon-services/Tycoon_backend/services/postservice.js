function postservice(dataval,req){
    let postObj={};
    postObj.email=req.email;
    postObj.uid=req.uid;
    postObj.hashtag=req.hashtag;
    postObj.time=req.time;
    postObj.image=req.image;
    postObj.like=req.like;
    postObj.posttext=req.posttext;
    postObj.likedby=req.likedby;
    return dataval.timelineRef.push(postObj);
}

function fetchdata(dataval){
    return dataval.timelineRef.on('value', (snapshot) => {
        console.log(snapshot.val());
      }, (errorObject) => {
        console.log(errorObject.name);
      }); 

}


module.exports={postservice,fetchdata};