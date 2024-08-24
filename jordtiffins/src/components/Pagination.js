import React from "react";

function Pagination(props) {
  return (
    <>
      <div className="pagination">
        <button
          className={`prev-page pagination-btn `}
          disabled={props.page === 1}
          onClick={props.handlePrev}
        >
          {props.page === 1 ? <span>&times;</span> : <span>&#8592;</span>}
        </button>

        <button
          className={`next-page pagination-btn `}
          disabled={props.page === props.totalPage}
          onClick={props.handleNext}
        >
          {props.page === props.totalPage ? (
            <span>&times;</span>
          ) : (
            <span>&#8594;</span>
          )}
        </button>
      </div>
    </>
  );
}

export default Pagination;
