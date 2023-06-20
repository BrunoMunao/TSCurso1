export default class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        throw Error("Método precisa sobrescrever classe pai!");
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
