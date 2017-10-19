import * as _ from 'underscore';

export class PaginadorService {
    obtenerPaginador(totalItems: number, paginaActual: number = 1, tamanoPagina: number = 5) {
        // calculate total pages
        let paginasTotales = Math.ceil(totalItems / tamanoPagina);

        let paginaInicial: number, paginaFinal: number;
        if (paginasTotales <= 10) {
            // less than 10 total pages so show all
            paginaInicial = 1;
            paginaFinal = paginasTotales;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (paginaActual <= 6) {
                paginaInicial = 1;
                paginaFinal = 10;
            } else if (paginaActual + 4 >= paginasTotales) {
                paginaInicial = paginasTotales - 9;
                paginaFinal = paginasTotales;
            } else {
                paginaInicial = paginaActual - 5;
                paginaFinal = paginaActual + 4;
            }
        }

        // calculate start and end item indexes
        let indiceInicial = (paginaActual - 1) * tamanoPagina;
        let indiceFinal = Math.min(indiceInicial + tamanoPagina - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        let paginas = _.range(paginaInicial, paginaFinal + 1);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            paginaActual: paginaActual,
            tamanoPagina: tamanoPagina,
            paginasTotales: paginasTotales,
            paginaInicial: paginaInicial,
            paginaFinal: paginaFinal,
            indiceInicial: indiceInicial,
            indiceFinal: indiceFinal,
            paginas: paginas
        };
    }
}
