import { writable } from "svelte/store";

/* must be ["index", "home", "map", "list", "like"] */
export const pageState = writable("map");

/* must be ["none", "loader", "focus"] */
export const overlay = writable("none");

/* must be ["none", "loader", "focus"] */
export const mapLoaded = writable(false);
