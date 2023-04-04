import { writable } from "svelte/store";
import data from "../scripts/place.json";

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

/*  */
export const tag = writable('TOUS');

export const allLikedPlaces = writable();