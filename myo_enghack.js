var Myo = require('myo');
var myMyo = Myo.create();

if (isLocked) document.write("Myo is LOCKED")
else {
  document.write("Myo is UNLOCKED")
}
myo.on('fist', function(edge){
    //Edge is true if it's the start of the pose, false if it's the end of the pose
    if(edge){
         myo.zeroOrientation();
         console.log('You may start your exercise');
         myMyo.vibrate('short');
    }
});
document.write(myo.orientationOffset)
alert ('sug');
