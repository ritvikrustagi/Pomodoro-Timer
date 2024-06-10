import { setupEventListeners as initializeEventListeners } from "./events.js";
import { loadSettings as loadUserSettings } from "./settings.js";

initializeEventListeners();
loadUserSettings();
