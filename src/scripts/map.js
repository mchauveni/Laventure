const closemarker = document.querySelector(".leaflet-popup-close-button");
const infos = document.querySelector(".popup");
const closed = document.querySelector(".close");
const img = document.getElementById("popup_img");
const distance = document.getElementById("distance");
const emplacement = document.getElementById("place");
const title = document.querySelector(".popup__txt--title");

infos.classList.toggle("d-none");

var Icon = L.icon({
  iconUrl: "./../assets/img/point.svg",
  // shadowUrl: "./../assets/img/place.svg",

  iconSize: [30], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 69], // point of the icon which will correspond to marker's location
  shadowAnchor: [27, 72], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

var map = L.map("map").setView([45.65, 0.16], 12.73);

var marker = L.marker([45.64, 0.14], { icon: Icon }).addTo(map);

var marker2 = L.marker([45.66, 0.16], { icon: Icon }).addTo(map);

var marker3 = L.marker([45.65, 0.17], { icon: Icon }).addTo(map);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 15,
}).addTo(map);

var popup2 = L.popup();

function onMapClick(e) {
  popup2.setLatLng(e.latlng);
  marker.setIcon(Icon);
  marker2.setIcon(Icon);
  marker3.setIcon(Icon);
  infos.classList.add("d-none");
}
const markerXY = marker["_latlng"];
const markerXY2 = marker2["_latlng"];
const markerXY3 = marker3["_latlng"];
const markerX = markerXY["lat"];
const markerY = markerXY["lng"];

var test = map.distance(markerXY, markerXY2);

map.on("click", onMapClick);

var BigIcon = L.icon({
  iconUrl: "./../assets/img/point_click.svg",
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
let distances;
let value;
let latitude;
let longitude;

function appendLocation(location, verb) {
  verb = verb || "updated";
  var Target = L.icon({
    iconUrl: "./../assets/img/car.svg",
    // shadowUrl: "./../assets/img/place.svg",

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

  var position = L.marker([latitude, longitude], { icon: Target }).addTo(map);

  position.openPopup();
}

if ("geolocation" in navigator) {
  document.getElementById("askButton").addEventListener("click", function () {
    navigator.geolocation.getCurrentPosition(function (location) {
      appendLocation(location, "fetched");
      distance1 = distance1;
      // console.log(distance1);
      distance2 = distance2;
      // console.log(distance2);
      distance3 = distance3;
      // console.log(distance3);
    });

    watchId = navigator.geolocation.watchPosition(appendLocation);
  });
}

marker.on("click", function (e) {
  infos.classList.remove("d-none");
  title.innerHTML = "Abbaye d'Aliénor";
  emplacement.innerHTML = "Nieul-sur-l'Autise";
  img.src = "/src/assets/img/Nieul.webp";
  distance.innerHTML = distance1;
  marker3.setIcon(Icon);
  marker2.setIcon(Icon);
  marker.setIcon(BigIcon);
});
marker2.on("click", function (e) {
  infos.classList.remove("d-none");
  title.innerHTML = "Embarcadère de maillezais";
  emplacement.innerHTML = "Maillezais";
  img.src = "/src/assets/img/embarcadere-abbaye-maillezais-1.webp";
  distance.innerHTML = distance2;
  marker.setIcon(Icon);
  marker3.setIcon(Icon);
  marker2.setIcon(BigIcon);
});
marker3.on("click", function (e) {
  infos.classList.remove("d-none");
  title.innerHTML = "IUT d'Angoulême";
  emplacement.innerHTML = "Angoulême";
  img.src = "/src/assets/img/iut.webp";
  distance.innerHTML = distance3;
  marker.setIcon(Icon);
  marker2.setIcon(Icon);
  marker3.setIcon(BigIcon);
});

closed.addEventListener("click", function () {
  infos.classList.add("d-none");
  marker.setIcon(Icon);
  marker2.setIcon(Icon);
  marker3.setIcon(Icon);
});
