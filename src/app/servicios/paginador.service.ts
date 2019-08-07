import * as _ from 'underscore';

export class PaginadorService {
    obtenerPaginador(totalItems: number, paginaActual: number = 1, tamanoPagina: number = 5) {
        // Calcula el total de páginas
        let paginasTotales = Math.ceil(totalItems / tamanoPagina);

        let paginaInicial: number, paginaFinal: number;
        if (paginasTotales <= 10) {
            // Si son 10 o menos páginas se muestran todas
            paginaInicial = 1;
            paginaFinal = paginasTotales;
        } else {
            // Si son más de 10 páginas se calcula la primera y última página
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

        // Calcula el inicio y fin en los indices para item's
        let indiceInicial = (paginaActual - 1) * tamanoPagina;
        let indiceFinal = Math.min(indiceInicial + tamanoPagina - 1, totalItems - 1);

        // Crea un array de páginas para el ngFor
        let paginas = _.range(paginaInicial, paginaFinal + 1);

        // Retorna un objeto con todas las propiedades de página requeridas por las vistas
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
