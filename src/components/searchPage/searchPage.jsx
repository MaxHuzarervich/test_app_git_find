import React, {useState} from "react";
import "./searchPage.css"
import image from "../../assets/Rectangle 17.png"
import {useDispatch} from "react-redux";
import {fetchRepositories} from "../../redux-store/repositoriesSlice";
import axios from "axios";
import {ProjectsList} from "../projectList/projectsList";
import {Pagination} from "../pagination/pagination";
import arrowLeft from "../../assets/Rectangle 11.png"
import arrowRight from "../../assets/Rectangle 12.png"

export const SearchPage = () => {

    const dispatch = useDispatch(),

        [text, setText] = useState(""),
        [result, setResult] = useState([]),
        [currentPage, setCurrentPage] = useState(1),
        projectsPerPage = 10,

        api = "https://api.github.com/search/repositories?q=",

        findRepositories = async () => {
            const response = await axios.get(`${api}${text}`)
            dispatch(fetchRepositories(`${text}`))
            setResult(response.data.items)
        },
        lastProjectIndex = currentPage * projectsPerPage,
        firstProjectIndex = lastProjectIndex - projectsPerPage,
        currentProject = result.slice(firstProjectIndex, lastProjectIndex),

        paginate = pageNumber => {
            setCurrentPage(pageNumber)
        },

        nextPage = () => setCurrentPage(prev => prev + 1),
        prevPage = () => setCurrentPage(prev => prev - 1),
        changeText = (e) => {
            setText(e.currentTarget.value)
        },

        pagesCount = [],

        totalCards = result.length,

        portionCount = Math.ceil(totalCards / projectsPerPage)

    for (let i = 1; i <= portionCount; i++) {
        pagesCount.push(i);
    }

    return (
        <div className="container">
            <div className="wrap-search">
                <div className="block-search">
                    <input
                        onChange={changeText}
                        value={text}
                        placeholder={" Начните вводить текст для поиска (не менее трех символов)"}/>
                    <button onClick={findRepositories} className="button-search">
                        <img src={image} alt="search"/>
                    </button>
                </div>
            </div>
            {
                result.length ? (
                    <>
                        <ProjectsList projects={currentProject}/>
                        <div className="block-pagination">
                            {currentPage > 1 && <button onClick={prevPage}>
                                <img src={arrowLeft} alt={"arrowLeft"}/>
                            </button>}
                            <Pagination
                                pagesCount={pagesCount}
                                currentPage={currentPage}
                                paginate={paginate}
                            />
                            {portionCount > currentPage && <button onClick={nextPage}>
                                <img src={arrowRight} alt={"arrowRight"}/>
                                </button>}
                        </div>
                    </>
                ) : <p>Поиск проектов...</p>
            }
        </div>
    )
}