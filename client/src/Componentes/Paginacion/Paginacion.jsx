import style from "./Paginacion.module.css"

const Pagination = ({ gamesPorPag , totalGames , clickPag , paginaActual }) => {

    const totalPages = Math.ceil(totalGames / gamesPorPag);

    const pageNumbers = [];

    for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(i + 1);
    }

    return (
            <div className={style.paginationContainer}>
              <button
                className={style.paginationButton}
                onClick={() => {
                  if (paginaActual > 1) clickPag(paginaActual - 1);
                }}
              >
                Anterior
              </button>
              {pageNumbers.map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => clickPag(pageNumber)}
                  className={`${style.numbers} ${paginaActual === pageNumber ? style.currentPage : ''}`}
                >
                  {pageNumber}
                </button>
              ))}
              <button
                className={style.paginationButton}
                onClick={() => {
                  if (paginaActual < totalPages) clickPag(paginaActual + 1);
                }}
              >
                Siguiente
              </button>
            </div>
    );
};

export default Pagination;