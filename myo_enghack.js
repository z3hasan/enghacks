myMyo.on('fist', function(edge){
    //Edge is true if it's the start of the pose, false if it's the end of the pose
    if(edge){
      myMyo.vibrate('long');
        enemies.crush();
    }
});
alert ('sug');

myMyo.on('thumb_to_pinky', function(edge){
    myMyo.timer(edge, 500, function(){
        myMyo.unlock(5000);
    })
});
