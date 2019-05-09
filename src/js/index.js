import $ from "jquery";
import "bootstrap"; //breathecode dom for more explicit errors
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  //adds event listener to activate the excuse//
  document.querySelector("button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = genExcuse();
  });
  console.log(genExcuse());
};
//generates the excuse fromm the 3 arrays//
function genExcuse() {
  let who = ["The dog", "My granma", "My turtle", "My borther", "My mom"];
  let what = [
    "ate the homework",
    "pissed on the homework",
    "crushed the homework",
    "broke the homework"
  ];
  let when = [
    "before the class.",
    "right before due time.",
    "just when I finished.",
    "during lunch break.",
    "while I was outside."
  ];
  //selects a random value from each array//
  let whoIndex = [Math.floor(Math.random() * who.length)];
  let whatIndex = [Math.floor(Math.random() * what.length)];
  let whenIndex = [Math.floor(Math.random() * when.length)];
  //returns an excuse w the 3 random values and concats them//
  return who[whoIndex] + " " + what[whatIndex] + " " + when[whenIndex];
}
