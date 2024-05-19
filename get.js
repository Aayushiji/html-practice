import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import Nav from "./navbar";
import Footer from "./footer"

function Get() {
  const [data, setData] = useState([]);
  const[filterData,setFilterData] = useState([])
  const[currentPage,setCurrentPage]= useState(1)
  const recordsPerPage = 5;
  const lasIndex = currentPage * recordsPerPage;
  const firstIndex = lasIndex - recordsPerPage;
  const records = data.slice(firstIndex,lasIndex);
  const npage = Math.ceil(data.length/recordsPerPage)
  const numbers = [...Array(npage + 1).keys()].slice(1)


  function prePage(){
    if (currentPage != 1){
      setCurrentPage(currentPage-1)
    }
  }
  function changeCpage(id){
   setCurrentPage(id)
  }
  function nextPage(){
    if(currentPage != npage){
      setCurrentPage(currentPage + 1)
    }
  }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        setData(resp);
        setFilterData(resp);
      });
    });
  }, []);
  console.log(data);

  const handleFilter =(value) =>{
    const res = filterData.filter(f => f.name.toLowerCase().includes(value))
    setData(res);
  }

  return (
    <>
     <Nav />
    <div className="get">
      <Sidebar />
      <div>
      <input type="text" placeholder="Search Here...." className="input"onChange={ e => handleFilter(e.target.value)}/>
      </div>
      <div className="centre">
        <h1 className="heading">Get API Call</h1>
        <br />
        <table border="1">
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td> 
            <td>Phone</td> 
          </tr>
          {records.map((d,i) => (
            <tr>
              <td>{d.id}</td>
              <td>{d.name}</td> 
              <td>{d.email}</td>
              <td>{d.phone}</td>
            </tr>
          ))}
        </table>
        <nav className="pagi">
          <ul className='pagination'>
            <li className='page-item'>
              <a href="#" className='page-link' onClick={prePage}>Prev</a>
            </li>
            {
              numbers.map((n,i) =>(
                <li className={`page-item ${currentPage=== n ? 'active':''}`} key={i}>
                  <a href="#" className='page-link' onClick={()=>changeCpage(n)}>{n}</a>
                </li>
              ))
            }
             <li className='page-item'>
              <a href="#" className='page-link' onClick={nextPage}>Next</a>
            </li>
          </ul>
        </nav>
        </div>
        </div>
        <Footer/>
    </>
  )}       
export default Get;
