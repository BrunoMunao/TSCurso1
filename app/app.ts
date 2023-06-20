import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener("submit", (event: Event) => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error("Form nulo!");
}
