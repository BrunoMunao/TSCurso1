export function domInjector(seletor) {
    return function (target, propretyKey) {
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`Buscando elemento do DOM com o seletor ${seletor} para injetar em ${propretyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propretyKey, { get: getter });
    };
}
//# sourceMappingURL=dom-injector.js.map