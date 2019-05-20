var watchID = null; 
// Device API libraries are loading 
document.addEventListener("deviceready", onDeviceReady, false); 
// device API are ready to use 
function onDeviceReady() 
{ 
    startWatch(); 
} 
// Trigger for start watching acceleration value 
function startWatch() 
{ 
    // acceleration updation after 3sec 
    var options = { frequency: 3000 }; 
    watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options); 
} 
// Trigger for stoping the acceleration watch 
function stopWatch() 
{ 
    if (watchID) 
    { 
        navigator.accelerometer.clearWatch(watchID); 
        watchID = null; 
    } 
} 
// Display the current acceleration 
function onSuccess(acceleration) 
{ 
    var element = document.getElementById('accelerometer'); 
    element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' + 'Acceleration Y: ' + acceleration.y + '<br />' + 'Acceleration Z: ' + acceleration.z + '<br />' + 'Timestamp: ' + acceleration.timestamp + '<br />'; 
} 
// Message display in case of failure 
function onError() 
{ 
    alert('onError!'); 
}