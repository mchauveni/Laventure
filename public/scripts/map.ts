import "leaflet";
import { pageState, mapLoaded, overlay } from "../../src/lib/stores";
import data from "./place.json";
import markerImg from "/src/assets/img/icons/map_marker.svg";

let alldatas = data.places;

const closemarker = document.querySelector(".leaflet-popup-close-button");
const infos = document.querySelector(".popup");
const closed = document.querySelector(".close");
const img = document.getElementById("popup_img");
const distance = document.getElementById("distance");
const emplacement = document.getElementById("place");
const title = document.querySelector(".popup__txt--title");

infos.classList.toggle("d-none");

var Icon = L.icon({
  iconUrl: markerImg,
  // shadowUrl: "./../assets/img/place.svg",

  iconSize: [30], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 69], // point of the icon which will correspond to marker's location
  shadowAnchor: [27, 72], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

let mapValue;

mapLoaded.subscribe((value) => {
  mapValue = value;
});

var map = L.map("map");
map.on("load", function (ev) {
  mapLoaded.set(true);
  pageState.set("index");
  overlay.set("none");
});
map.setView([45.65, 0.135], 16);

var marker = L.marker([alldatas[0].placeX, alldatas[0].placeY], {
  icon: Icon,
}).addTo(map);

var marker2 = L.marker([alldatas[1].placeX, alldatas[1].placeY], {
  icon: Icon,
}).addTo(map);

var marker3 = L.marker([alldatas[2].placeX, alldatas[2].placeY], {
  icon: Icon,
}).addTo(map);

var marker4 = L.marker([alldatas[3].placeX, alldatas[3].placeY], {
  icon: Icon,
}).addTo(map);

var marker5 = L.marker([alldatas[4].placeX, alldatas[4].placeY], {
  icon: Icon,
}).addTo(map);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 15,
}).addTo(map);

var popup2 = L.popup();

function onMapClick(e) {
  popup2.setLatLng(e.latlng);
  marker.setIcon(Icon);
  marker2.setIcon(Icon);
  marker3.setIcon(Icon);
  marker4.setIcon(Icon);
  marker5.setIcon(Icon);
  infos.classList.add("d-none");
}
const markerXY = marker["_latlng"];
const markerXY2 = marker2["_latlng"];
const markerXY3 = marker3["_latlng"];
const markerXY4 = marker4["_latlng"];
const markerXY5 = marker5["_latlng"];
const markerX = markerXY["lat"];
const markerY = markerXY["lng"];

map.on("click", onMapClick);

var BigIcon = L.icon({
  iconUrl: markerImg,
  // shadowUrl: "./../../img/abeille_ombre.png",

  iconSize: [48], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [27, 82], // point of the icon which will correspond to marker's location
  shadowAnchor: [27, 72], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

/* Localisation */
var watchId;

let distance1;
let distance2;
let distance3;
let distance4;
let distance5;
let distances;
let value;
let latitude;
let longitude;

function appendLocation(location, verb) {
  verb = verb || "updated";
  var Target = L.icon({
    iconUrl: "src/assets/img/icons/car.svg",
    iconSize: [35], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 69], // point of the icon which will correspond to marker's location
    shadowAnchor: [27, 72], // the same for the shadow
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });

  value = location["coords"];
  latitude = value["latitude"];
  longitude = value["longitude"];
  distances = [latitude, longitude];

  distance1 = map.distance(markerXY, distances);
  distance2 = map.distance(markerXY2, distances);
  distance3 = map.distance(markerXY3, distances);
  distance4 = map.distance(markerXY4, distances);
  distance5 = map.distance(markerXY5, distances);

  var position = L.marker([latitude, longitude], { icon: Target }).addTo(map);

  position.openPopup();
}

if ("geolocation" in navigator) {
  document.getElementById("askButton").addEventListener("click", function () {
    navigator.geolocation.getCurrentPosition(function (location) {
      appendLocation(location, "fetched");
      distance1 = distance1;
      distance2 = distance2;
      distance3 = distance3;
      distance4 = distance4;
      distance5 = distance5;
    });

    watchId = navigator.geolocation.watchPosition(appendLocation);
  });
}

marker.on("click", function (e) {
  infos.classList.remove("d-none");
  title.innerHTML = alldatas[0].name;
  emplacement.innerHTML = alldatas[0].namePlace;
  img.src = alldatas[0].imgSrc;
  distance.innerHTML = "~" + Math.floor(distance1 / 1000) + "km";
  marker3.setIcon(Icon);
  marker2.setIcon(Icon);
  marker4.setIcon(Icon);
  marker5.setIcon(Icon);
  marker.setIcon(BigIcon);
});
marker2.on("click", function (e) {
  infos.classList.remove("d-none");
  title.innerHTML = alldatas[1].name;
  emplacement.innerHTML = alldatas[1].namePlace;
  img.src = alldatas[1].imgSrc;
  distance.innerHTML = "~" + Math.floor(distance2 / 1000) + "km";
  marker.setIcon(Icon);
  marker3.setIcon(Icon);
  marker4.setIcon(Icon);
  marker5.setIcon(Icon);
  marker2.setIcon(BigIcon);
});
marker3.on("click", function (e) {
  infos.classList.remove("d-none");
  title.innerHTML = alldatas[2].name;
  emplacement.innerHTML = alldatas[2].namePlace;
  img.src = alldatas[2].imgSrc;
  distance.innerHTML = "~" + Math.floor(distance3 / 1000) + "km";
  marker.setIcon(Icon);
  marker2.setIcon(Icon);
  marker4.setIcon(Icon);
  marker5.setIcon(Icon);
  marker3.setIcon(BigIcon);
});
marker4.on("click", function (e) {
  infos.classList.remove("d-none");
  title.innerHTML = alldatas[3].name;
  emplacement.innerHTML = alldatas[3].namePlace;
  img.src = alldatas[3].imgSrc;
  distance.innerHTML = "~" + Math.floor(distance4 / 1000) + "km";
  marker.setIcon(Icon);
  marker2.setIcon(Icon);
  marker5.setIcon(Icon);
  marker3.setIcon(Icon);
  marker4.setIcon(BigIcon);
});
marker5.on("click", function (e) {
  infos.classList.remove("d-none");
  title.innerHTML = alldatas[4].name;
  emplacement.innerHTML = alldatas[4].namePlace;
  img.src = alldatas[4].imgSrc;
  distance.innerHTML = "~" + Math.floor(distance5 / 1000) + "km";
  marker.setIcon(Icon);
  marker2.setIcon(Icon);
  marker4.setIcon(Icon);
  marker3.setIcon(Icon);
  marker5.setIcon(BigIcon);
});

closed.addEventListener("click", function () {
  infos.classList.add("d-none");
  marker.setIcon(Icon);
  marker2.setIcon(Icon);
  marker3.setIcon(Icon);
  marker4.setIcon(Icon);
  marker5.setIcon(Icon);
});
