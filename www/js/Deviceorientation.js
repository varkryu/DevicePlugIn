var watchID = null; 
// API libraries are loading 
document.addEventListener("deviceready", onDeviceReady, false); 
// Device API are ready to use 
function onDeviceReady() 
{ 
    startWatch(); 
} 
// Trigger for starting the watch 
function startWatch() 
{ 
    // After every 3 sec it update the compass value 
    var options = 
    { 
        frequency: 3000 
    }; 
    watchID = navigator.compass.watchHeading(onSuccess, onError, options); 
} 
// Trigger for stoping the watch 
function stopWatch() 
{ 
    if (watchID) 
    { 
        navigator.compass.clearWatch(watchID); 
        watchID = null; 
    } 
} 
// Get the current heading 
function onSuccess(heading) 
{ 
    var element = document.getElementById('heading'); 
    element.innerHTML = 'Heading: ' + heading.magneticHeading; 
    var test =heading.magneticHeading; 
    s=String;s.prototype.a=s.prototype.replace;
    var a=test/11.25,a=a+0.5|0,b,k,c=a,d=c%8,c=c/8|0,e=["north","east","south","west"],f,g,h;f=e[c];g=e[(c+1)%4];
    h=f==e[0]|f==e[2]?f+g:g+f;b="1;1 by 2;1-C;C by 1;C;C by 2;2-C;2 by 1".split(";")[d].a(1,f).a(2,g).a("C",h);
    k=ba(/north/g,"N").a(/east/g,"E").a(/south/g,"S").a(/west/g,"W").a(/by/g,"b").a(/[\s-]/g,"");
    b=b[0].toUpperCase()+b.slice(1);
    alert(b+" "+k) 
} 
// message display in case of failure 
function onError(compassError) 
{ 
    alert('Compass error: ' + compassError.code); 
}