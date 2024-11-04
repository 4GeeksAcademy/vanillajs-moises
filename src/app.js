/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let first = "A ";
  let caract = ["angry ", "friendly ", "crazy ", "slow "];
  let who = ["granny ", "dog ", "woman ", "turtle "];
  let action = ["say ", "ran ", "stole ", "almost "];
  let what = [
    "that we can't play here",
    "towards me",
    "my shopping cart",
    "got hit by a car"
  ];

  let var1 = Math.floor(Math.random() * caract.length);
  let var2 = Math.floor(Math.random() * who.length);
  let var3 = Math.floor(Math.random() * action.length);
  let var4 = Math.floor(Math.random() * what.length);

  document.querySelector("#generator").innerHTML =
    first + caract[var1] + who[var2] + action[var3] + what[var4];
};
