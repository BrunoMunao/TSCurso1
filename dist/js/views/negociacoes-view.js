export default class NegociacaoView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(listaNegociacoes) {
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
    update(listaNegociacoes) {
        this.elemento.innerHTML = this.template(listaNegociacoes);
    }
}
