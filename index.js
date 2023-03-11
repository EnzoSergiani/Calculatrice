//#region --- Outils ---
function dechargePile(values) {
  for (let i = 0; i < pile.length; i++) {
    values += pile[i];
  }
  return values;
}

//#endregion

//#region --- Opérations ---
function calcul(pile){
  answer = eval(pile.join(""));
  pile = [answer]
  return answer;
}
//#endregion

//#region --- Affichage ---
function printScreen(values) {
  document.getElementById("answer").innerHTML = values;
}

function clearScreen() {
  document.getElementById("answer").innerHTML = "";
}

function setHistoric(answer){
  document.getElementById("historic").innerHTML = answer;
}
//#endregion

const buttons = document.querySelectorAll("button");
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var pile = [];
let values;
let answer;

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const id = event.target.id;
    console.log(`Bouton ${id}`);
    if (id == "delete"){
      pile.pop();
      printScreen(dechargePile());
    }
    else if (id == "egal") {
      clearScreen();
      printScreen(calcul(pile));
    }
    else if (id == "addition") {
      pile.push("+");
      printScreen(dechargePile());
    }
    else if (id == "soustraction") {
      pile.push("-");
      printScreen(dechargePile());
    }
    else if (id == "multiplication") {
      pile.push("*");
      printScreen(dechargePile());
    }
    else if (id == "division") {
      pile.push("/");
      printScreen(dechargePile());
    }
    else if (id == "mod") {
      pile.push(" mod ");
      printScreen(dechargePile());
    }
    else if (id == "puissance") {
      pile.push("^");
      printScreen(dechargePile());
    }
    else if (id == "pi") {
      pile.push("(3.14)");
      printScreen(dechargePile());
    }
    else if (id == "parentheseOuv") {
      pile.push("(");
      printScreen(dechargePile());
    }
    else if (id == "parentheseFer") {
      pile.push(")");
      printScreen(dechargePile());
    }
    else if (id == "sqrt") {
      pile.push(" sqrt(");
      printScreen(dechargePile());
    }
    else if (id == "pourcentage") {
      pile.push("%");
      printScreen(dechargePile());
    }
    else if (id == "point") {
      pile.push(".");
      printScreen(dechargePile());
    }
    else if (id in number) {
      pile.push(id);
      printScreen(dechargePile());
    } else {
      console.error("Erreur input");
    }
  });
});
