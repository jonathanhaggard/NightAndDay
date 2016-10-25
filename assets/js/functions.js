function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);

}

var getTheColors = function() {
    var path = 'https://night-and-day-server.herokuapp.com/'
    httpGetAsync(path, function(res){
      var colors = "rgb(" + res + ")";
      console.log(colors);
      // var colors = res.split(', ');
      // console.log(colors);
      var sky = document.getElementById('sky');
      sky.style.backgroundColor = colors;

      var rgbDisplay = document.getElementById('rgbDisplay');
      rgbDisplay.innerHTML = rgbDisplay.innerHTML + colors;
    });
}
// setInterval(getTheColors, 1000);
getTheColors();

$( document ).ready(function() {

  var curTime = moment().tz("America/Los_Angeles").format("LT");
  // add to html
  var timeDisplay = document.getElementById('curTime');
  timeDisplay.innerHTML = timeDisplay.innerHTML + "@ " + curTime;

//animation timing
  var sunTime = moment().tz("America/Los_Angeles").format("H");

    //set time offset, right now it's 7 but need to add daylight savings
    sunProgress = sunTime/24;

    console.log(sunProgress);
    //animation timeline and pause at suns progress
    var sun = document.getElementById('sun');

    var tl = new TimelineMax();
    tl.set(sun,{ transform: "translate3d(-50vw, 100vh, 0) scale(0.5)", opacity: .2})
    tl.fromTo(sun, 2,
      {
        transform: "translate3d(-50vw, 100vh, 0) scale(0.5)",
        opacity: .2
      },
      {
        transform: "translate3d(0, 25vh, 0) scale(.75)",
      }
    )
    .to(sun, 2,
      {
        transform: "translate3d(50vw, 100vh, 0) scale(0.5)",
      }
    )
    .pause().progress(sunProgress)


});
