export default class View<T> {
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    template(model: T) : string {
        throw Error("Método precisa sobrescrever classe pai!");
    }

    update(model: T): void {
        this.elemento.innerHTML = this.template(model);
    }
}
