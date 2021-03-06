var GoPro = require('../lib/index.js');

var cam = new GoPro.Camera();
/*
10 second Video with Image Stabilisation
HERO5 only
*/

// Set camera mode
cam.mode(GoPro.Settings.Modes.Video, GoPro.Settings.Submodes.Video.Video)

// Set camera resolution
.then(function () {
    return cam.set(GoPro.Settings.VIDEO_RESOLUTION, GoPro.Settings.VideoResolution.R1080)
})

// Set camera framerate
.then(function () {
    return cam.set(GoPro.Settings.VIDEO_FPS, GoPro.Settings.VideoFPS.F30)
})

// Set EIS video
.then(function () {
    return cam.set(GoPro.Settings.VIDEO_EIS, GoPro.Settings.VideoEIS.ON)
})

// Begin recording
.then(function () {
    console.log('[video]', 'started')
    return cam.start()
})

// Wait 10s
.delay(10000)

// Stop recording
.then(function () {
    console.log('[video]', 'stopped')
    return cam.stop()
})
