import { writable } from "svelte/store";
import data from "/src/scripts/place.json";

let allplaces = data.places;

/* must be ["index", "home", "map", "list", "like"] */
export const pageState = writable("map");

/* must be ["none", "loader", "focus"] */
export const overlay = writable("loader");
export const focusData = writable(allplaces[0]);

/* is the map loaded ? */
export const mapLoaded = writable(false);

/* the value of the searchBar */
export const search = writable("");

/* The selected tag for HOME. Can have these values : ["TOUS", "NATURE", "RELIGION", "PRODUCTION", "HISTORIQUE"] */
export const tag = writable("TOUS");

/* Correspond to the localStorage's liked places */
export const allLikedPlaces = writable();

/* All places that exists near you */
export const placesNearYou = writable([]);