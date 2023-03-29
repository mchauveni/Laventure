import { writable } from "svelte/store";
import data from "./../scripts/place.json";
let allplaces = data.places;

/* must be ["index", "home", "map", "list", "like"] */
export const pageState = writable("map");

/* must be ["none", "loader", "focus"] */
export const overlay = writable("focus");
export const focusData = writable(allplaces[0]);

/* is the map loaded ? */
export const mapLoaded = writable(false);
