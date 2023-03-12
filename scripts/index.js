// ! : Problème dans la réception des id
// ! : Rendre fonctionnel la touche "sqrt()"
// TODO : Remplacer "*" pas "x" dans l'affichage
// TODO : Remplacer "**" pas "^" dans l'affichage

//#region --- Outils ---

function dechargePile(values) {
  values = values || "";
  for (let i = 0; i < pile.length; i++) {
    values += pile[i];
  }
  return values;
}

//#endregion

//#region --- Opérations ---

function calcul(pile){
  try {
    answer = eval(pile.join(""));
    console.log(answer);
    pile = [answer]
    return answer;
  } catch (erreur) {
    printError();
    return;
  }
}

//#endregion

//#region --- Affichage ---

function printResult(values) {
  document.getElementById("answer").innerHTML = values;
}

function printHistoric(answer){
  document.getElementById("historic").innerHTML = answer;
}

function printError(){
  document.getElementById("answer").innerHTML = "Error syntax"
}

function clearResult() {
  document.getElementById("answer").innerHTML = "";
 
}

function clearHistoric(){
  document.getElementById("historic").innerHTML = "";
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
    console.log("Pile :",pile);
    console.log("Bouton :",id);
    if (id == "clear"){
      clearResult();
      clearHistoric();
      pile = [];
    }
    else if (id == "delete"){    console.log("1> ",pile.join(""));
    console.log("2> ",eval(pile.join("")));
      pile.pop();
      printResult(dechargePile());
    }
    else if (id == "egal") {
      printHistoric(dechargePile())
      clearResult();      
      answer = calcul(pile)
      pile = [answer.toString()]
      printResult(answer);
    }
    else if (id == "addition") {
      pile.push("+");
      printResult(dechargePile());
    }
    else if (id == "soustraction") {
      pile.push("-");
      printResult(dechargePile());
    }
    else if (id == "multiplication") {
      pile.push("*");
      printResult(dechargePile());
    }
    else if (id == "division") {
      pile.push("/");
      printResult(dechargePile());
    }
    else if (id == "mod") {
      pile.push("%");
      printResult(dechargePile());
    }
    else if (id == "puissance") {
      pile.push("**");
      printResult(dechargePile());
    }
    else if (id == "pi") {
      pile.push("(3.14)");
      printResult(dechargePile());
    }
    else if (id == "parentheseOuv") {
      pile.push("(");
      printResult(dechargePile());
    }
    else if (id == "parentheseFer") {
      pile.push(")");
      printResult(dechargePile());
    }
    else if (id == "racine") {
      pile.push("sqrt(");
      printResult(dechargePile());
    }
    else if (id == "point") {
      pile.push(".");
      printResult(dechargePile());
    }
    else if (id in number) {
      pile.push(id);
      console.log("> Pile :",pile);
      printResult(dechargePile());
    } else {
      console.error("Erreur input");
    }
  });
});