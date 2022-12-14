/**
 * Completer ces fonctions
 *
 */

function getRandomElement(list: string[]): string {
  let randomIndex: number = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function track(listVegeFruit: NodeList): boolean {
  return listVegeFruit.length >= 5;
}

/******************************************************
 * LE CODE CI-DESSOUS FAIT FONCTIONNER LA PAGE TU PEUX
 * LE MODIFIER POUR COMPRENDRE COMMENT IL FONCTIONNE
 * MAIS ATTENTION DE NE PAS L'EFFACER...
 ******************************************************
 */

const BTN_ADD =
  document.querySelector("#add") && document.querySelector("#add");
const BTN_REMOVE = document.querySelector("#remove");
const LIST = document.querySelector("#fruitList");
const MSG_SUCCESS = document.querySelector("#success");
const MSG_FAIL = document.querySelector("#fail");

const listVeg = [
  "π Pomme verte",
  "π Pomme rouge",
  "π Poire",
  "π Orange",
  "π Citron",
  "π Banane",
  "π PastΓ¨que",
  "π Fraise",
  "π Aubergine",
  "π Tomate",
  "π₯ Avocat",
  "π₯¦ Brocoli",
  "π₯ Cocombre",
  "π« Poivron",
  "π₯ Carotte",
];

function check() {
  if (LIST) {
    if (track(LIST.childNodes)) {
      MSG_SUCCESS?.classList.remove("invisible");
      MSG_FAIL?.classList.add("invisible");
    } else {
      MSG_SUCCESS?.classList.add("invisible");
      MSG_FAIL?.classList.remove("invisible");
    }
  } else {
    console.error("Error avec la list d'Γ©lΓ©ment");
  }
}

BTN_ADD?.addEventListener("click", function () {
  if (LIST) {
    const vege = getRandomElement(listVeg);
    LIST.innerHTML += `<li class="list-group-item">${vege}</li>`;
    check();
  }
});

BTN_REMOVE?.addEventListener("click", function () {
  if (LIST?.lastChild) {
    LIST.removeChild(LIST.lastChild);
  }
  check();
});
