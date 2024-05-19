
import "./App.css";
import Post from "./post"
import Get from "./get"
import { Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./home";


function App(){
  return(
    <>
   
    <Routes>
      <Route path="/get" element={<Get/>}/>
      <Route path="/" exact element={<Home />}/>
      <Route path="/post" element={<Post/>}/>
      <Route path="/" exact element={<Home />}/>
    </Routes>
   
    {/* <Routes>
      // <Route path="/post" element={<Post/>}/>
      // <Route path="/" exact element={<Home />}/>
    </Routes>  */}


    </>

  )
}

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [save, setSave] = useState([]);
//   function saveuser() {
//     console.log(name, email, mobile);
//     let data = { name, email, mobile };
//     fetch("https://jsonplaceholder.typicode.com/users", {
//       method: "POST",
//       Headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     }).then((responce) => {
//       console.log("result", responce);

//       if (responce.status === 201) {
//         setSave();
//         setName("");
//         setEmail("");
//         setMobile("");
//       } else {
//         console.error("error occure");
//       }
//     });
//   }
//   return(
//     <div className="App">
//       <h1>POST API</h1>
//       {!save && <h3>data save successfully</h3>}
//       <label>Enter a Name</label> <br />
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//         name="name"
//       />
//       <br /> <br />
//       <label>Enter a Email</label> <br />
//       <input
//         type="text"
//         value={email}
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//         name="name"
//       />
//       <br /> <br />
//       <label>Enter a Mobile</label> <br />
//       <input
//         type="text"
//         value={mobile}
//         onChange={(e) => {
//           setMobile(e.target.value);
//         }}
//         name="name"
//       />
//       <br /> <br />
//       <button class="button-85" role="button" onClick={saveuser}>
//         SAVE
//       </button>
//     </div>
//   )
// }





export default App;
