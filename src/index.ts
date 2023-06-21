import { AppState } from './appState.js';

let appState = new AppState()

window.addEventListener("load", function() {
  console.log("Window onLoad function.");
  init();
});

function init() {
  appState.setTabButtonEvent();

  appState.setToggleNavigationEvent();

  appState.toggleLoadingState();

  appState.addSlides();

  appState.addAnimationToOriginality();
}
