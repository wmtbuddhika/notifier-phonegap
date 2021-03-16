document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Ready ...');
}

function vibrate(){ navigator.vibrate(3000); }

function ring() { navigator.notification.beep(3); }
