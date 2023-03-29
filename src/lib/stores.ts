import { writable } from "svelte/store";

/* must be ["index", "home", "map", "list", "like"] */
export const pageState = writable("index");

/* must be ["none", "loader", "focus"] */
export const overlay = writable("none");
