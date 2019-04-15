function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
    navigator.notification.beep(1);

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    }
    
    function onError() {
        alert('onError!');
    }
    
    var options = { frequency: 2000 };  // Update every 2 seconds
    
    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
       
}

function checkConnection() {
    var networkState = navigator.connection.type;
 
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';
 
    alert('Connection type: ' + states[networkState]);
}
 
checkConnection();


