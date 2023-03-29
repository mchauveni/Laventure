export {};
const localisations = document
  .querySelector(".test")
  .querySelectorAll(".localisationPlace");

let test1;

localisations.forEach((localisation) => {
  test1 = localisation.innerHTML;
  test1 = test1.split(",");
  console.log(test1);
});

var watchId;

let distances;
let value;
let latitude;
let longitude;
let test;

function appendLocation(location, verb) {
  verb = verb || "updated";
  value = location.coords;
  latitude = value.latitude;
  longitude = value.longitude;
  distances = [latitude, longitude];
  test = [distances, test1];
  console.log(test);
  //   function distance( test1[0], test1[1], latitude, longitude) {
  //     var R = 6371; // km (change this constant to get miles)
  //     var dLat = ((latitude - lat1) * Math.PI) / 180;
  //     var dLon = ((longitude - lon1) * Math.PI) / 180;
  //     var a =
  //       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  //       Math.cos((lat1 * Math.PI) / 180) *
  //         Math.cos((latitude * Math.PI) / 180) *
  //         Math.sin(dLon / 2) *
  //         Math.sin(dLon / 2);
  //     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  //     var d = R * c;
  //     if (d > 1) return Math.round(d) + "km";
  //     else if (d <= 1) return Math.round(d * 1000) + "m";
  //     return d;
  //   }
}

if ("geolocation" in navigator) {
  document.getElementById("askButton").addEventListener("click", function () {
    navigator.geolocation.getCurrentPosition(function (location) {
      appendLocation(location, "fetched");
    });
    watchId = navigator.geolocation.watchPosition(appendLocation);
  });
}
