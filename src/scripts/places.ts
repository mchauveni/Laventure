export { };
document.addEventListener('DOMContentLoaded', () => {


  const components = document.querySelectorAll(".placeComponent");

  let test1;

  let watchId;

  let distances;
  let value;
  let latitude;
  let longitude;
  let lat1;
  let lon2;
  let d;
  let result;
  let maxdist;

  function appendLocation(location, verb) {
    verb = verb || "updated";
    value = location.coords;
    latitude = value.latitude;
    longitude = value.longitude;
    distances = [latitude, longitude];
    components.forEach((component) => {
      test1 = component.querySelector(".localisationPlace").innerHTML;
      test1 = test1.split(" ");
      lat1 = test1[0];
      lon2 = test1[1];
      maxdist = 30;
      result = distance(lat1, lon2, latitude, longitude);
      if (parseInt(result) < maxdist) {
        component.classList.add("show");
      } else {
        component.classList.remove("show");
      }
    });
  }

  function distance(latbis, lonbis, latitudebis, longitudebis) {
    var R = 6371;
    var dLat = ((latitudebis - latbis) * Math.PI) / 180;
    var dLon = ((longitudebis - lonbis) * Math.PI) / 180;
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((latbis * Math.PI) / 180) *
      Math.cos((latitudebis * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    d = R * c;
    if (d > 1) return Math.floor(d) + " km";
    else if (d <= 1) return Math.floor(d * 1000) + " m";
  }

  if ("geolocation" in navigator) {
    document.getElementById("askButton").addEventListener("click", function () {
      navigator.geolocation.getCurrentPosition(function (location) {
        appendLocation(location, "fetched");
      });
      watchId = navigator.geolocation.watchPosition(appendLocation);
    });
  }

})