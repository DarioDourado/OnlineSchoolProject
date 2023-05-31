import './courseExplorerSearch.css';
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { 
  searchByTitle,
  clearTitle

} from "../../CoursesList/CourseListSlice";
import {useState} from 'react';



export default function CourseExplorerSearch() {


  const [searchBar, setsearchBar] = useState('');

  const handleSearchBar = () => {
    setsearchBar('');
  };

  let dispatch = useDispatch();

  const filtered = useSelector(state => state.filterLibrary.filteredCourses)
  const curso = useSelector(state => state.courseLibrary.dataCourses)

  return (
    <section>
      <section className='flex courseExplorer mx-auto m-7'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#333" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input
          type="text"
          placeholder='O que pretende aprender? '
          className='h-14 w-[400px] outline-none'
          onChange={(e) => dispatch(searchByTitle(e.target.value))}
          
        />
        <button 
        className='btnSearch'
        value={searchBar}
        onClick={console.log('Clear')}
        >Explorar</button>
      </section>
    </section>
  )
}
