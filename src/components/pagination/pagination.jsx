import React from "react";
import "./pagination.css"

export const Pagination = ({paginate, currentPage, pagesCount}) => {
    return (
        <div>
            <ul className={"pagination-ul"}>
                {pagesCount.map(number => (
                    <li
                        className={
                            currentPage === number ? "pagination-li-checked" : "pagination-li"
                        } key={number}>
                        <a onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}