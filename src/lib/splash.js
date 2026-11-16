"use client";

import { useSyncExternalStore } from "react";

// Tiny store so the hero can wait for the splash curtain before animating in.
// Module state resets on a full reload and survives client-side navigation.
let done = false;
const listeners = new Set();

export function markSplashDone() {
  if (done) return;
  done = true;
  listeners.forEach((fn) => fn());
}

function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function useSplashDone() {
  return useSyncExternalStore(
    subscribe,
    () => done,
    () => false,
  );
}
