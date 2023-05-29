import './App.css';
import {SearchPage} from './components/searchPage/searchPage';
import {PageNotFound} from "./components/notFoundPage";
import { Routes, Route } from 'react-router-dom';


export const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<SearchPage/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </div>
    )
}

