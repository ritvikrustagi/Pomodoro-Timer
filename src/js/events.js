import { handleSettingsFormSubmit } from "./settings.js";
import { timer } from "./timer.js";

const modes = document.querySelectorAll(".mode");
const getStartedMessage = document.querySelector(".get-started");
const settingsModalPopover = document.querySelector("#settings-modal");
const settingsModalApplyButton = document.querySelector(".settings-modal__btn");
const fontButtons = document.querySelectorAll("[data-font]");
const accentColorButtons = document.querySelectorAll("[data-accent-color]");

export const setupEventListeners = () => {
  modes.forEach((mode) => mode.addEventListener("click", onModeClick));

  document.addEventListener("keyup", onKeyUp);

  initializeToggleEvents(fontButtons);
  initializeToggleEvents(accentColorButtons);

  settingsModalApplyButton.addEventListener("click", handleSettingsFormSubmit);
};

const onModeClick = (event) => {
  const secondsForMode = parseInt(event.target.dataset.time, 10);
  modes.forEach((mode) => mode.classList.remove("active"));
  event.target.classList.add("active");
  getStartedMessage.style.display = "none";
  timer(secondsForMode);
};

const onKeyUp = (event) => {
  if (event.target.localName !== "input" && event.key === "s") {
    settingsModalPopover.togglePopover();
  }
};

const initializeToggleEvents = (buttons) => {
  buttons.forEach((button) => button.addEventListener("click", (event) => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    event.target.classList.add("active");
  }));
};
