function loopforever() {

    var d = new Date();
    var h = d.getUTCHours();
    var m = d.getUTCMinutes();
    var s = d.getUTCSeconds();
    var tz = d.getTimezoneOffset();
    var ampm = "AM";

    if (tz % 60 == 0) {
        h = h - (tz / 60);
    } else {
        h = h - Math.floor(tz / 60);
        m = m - (tz % 60);
    }

    if (h >= 12) {
        h = h - 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }
    document.getElementById("clock").innerHTML = (h + ": " + m + ": " + s + " " + ampm);
    // document.getElementById("clock").innerHTML = toTimeString();
}
setInterval(loopforever, 1000);