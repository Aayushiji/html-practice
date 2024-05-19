import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  // const navigate = useNavigate();
  // function goToGet(){
  //     navigate("/get")
  // }

  return (
    <div className="sidebar">
      {/* <h1>sidebar</h1> */}
      {/* <br /> */}
      <Link to="/get" className="space">
        <button type="button" className="but1">
          {" "}
          GET API
        </button>
      </Link>{" "}
      {/* <br /> <br /> */}
      <Link to="/post" className="space">
       <button type="button" className="but2">
          POST API
       </button>
      </Link>
    </div>
  );
}
export default Sidebar;

// export default Sidebar;

// import React from "react";
// import './App.css';
// import { useState,useEffect } from 'react';

// function Get() {
//   const[data,setData]=useState([])
//   useEffect(()=>{
//     fetch("s").then((result)=>{
//       result.json().then((resp)=>{
//         setData(resp)
//       })
//     })
//   },[])

//   return (
//     <div>
//       <h1>Get API  Call</h1>
//       <table border="1">
//         <tr>
//           <td>ID</td>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Phone</td>
//         </tr>
//         {
//           data.map((item)=>
//           <tr>
//             <td>{item.id}</td>
//             <td>{item.name}</td>
//             <td>{item.email}</td>
//             <td>{item.phone}</td>
//           </tr>
//           )
//         }
//       </table>

//     </div>
//   );
// }

// export default Get;
