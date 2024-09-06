// Implement the launch sequence function here and export it as the default export.
import { loadPayload } from "./core/load.js";
import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";
import { NFSAT } from "./payload/satellites.js";
import { FISHSAT } from "./payload/satellites.js";
import { rocket } from "./core/rocket.js";

function launch() {
  loadPayload(FISHSAT);
  loadPayload(NFSAT);
  fuel();
  // The function has to be called as many times as required by the countdown length. --> 5
  for (let count = 1; count <= rocket.requiredCountdown; count++) {
    countdown();
  }

  liftoff();
  deployPayload();
}

export default launch;
