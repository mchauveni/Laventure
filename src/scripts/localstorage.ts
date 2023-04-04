import { allLikedPlaces } from "/src/lib/stores";
import datas from "./place.json";

export function displayLikedPlaces() {
  const likedPlaces = JSON.parse(localStorage.getItem("places")) || [];
  const allDatas = datas.places;
  const likedPlacesIds = new Set(likedPlaces);
  const likedPlacesList = allDatas.filter((place) =>
    likedPlacesIds.has(place.id)
  );

  allLikedPlaces.set(likedPlacesList);
}

export function deleteAll() {
  localStorage.clear();
  displayLikedPlaces();
}
