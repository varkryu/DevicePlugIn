//  device API libraries are loading 
document.addEventListener("deviceready", onDeviceReady, false); 
// The device API are ready to use 
function onDeviceReady() 
{ 
    var element = document.getElementById('deviceProperties'); 
    element.innerHTML = 'Device Model: ' + device.model + '<br />' + 'Device Cordova: ' + device.cordova + '<br />' + 'Device Platform: ' + device.platform + '<br />' + 'Device UUID: ' + device.uuid + '<br />' + 'Device Version: ' + device.version + '<br />'; 
}