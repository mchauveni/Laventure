import datas from "/src/scripts/place.json";
import { placesNearYou } from "/src/lib/stores";
import { get } from "svelte/store";


let watchId;
export function locationButtonClick() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (location) {
      appendLocation;
    });
    watchId = navigator.geolocation.watchPosition(appendLocation);
  }
};


export function appendLocation(location: GeolocationPosition) {
  let placesToShow = [];
  let maxdist = 30;
  let UserLat = location.coords.latitude;
  let UserLon = location.coords.longitude;

  datas.places.forEach((place) => {
    let placeLat = place.placeX;
    let placeLon = place.placeY;
    let result = distance(placeLat, placeLon, UserLat, UserLon);

    if (result <= maxdist) {
      placesToShow.push(place);
    }
  });

  placesNearYou.set(placesToShow);
}

export function distance(lat1: number, long1: number, lat2: number, long2: number) {
  var R = 6371;
  var dLat = ((lat2 - lat1) * Math.PI) / 180;
  var dLon = ((long2 - long1) * Math.PI) / 180;
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
    Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c;
  return Math.round(d * 100) / 100;
}