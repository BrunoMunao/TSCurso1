import { Negociacoes } from "../models/negociacoes.js";

export default class NegociacaoView {
    private elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    template(listaNegociacoes: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                ${listaNegociacoes
                    .lista()
                    .map((negociacao) => {
                       return `<tr>
                        <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                     </tr>`;
                    })
                    .join("")}
            </tbody>
        </table>
        `;
    }

    update(listaNegociacoes: Negociacoes): void {
        this.elemento.innerHTML = this.template(listaNegociacoes);
    }
}
