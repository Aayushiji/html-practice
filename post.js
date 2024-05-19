import React from "react";
import "./App.css";
import { useState } from "react";
import Nav from "./navbar";
import Sidebar from "./sidebar";

function Post() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [save, setSave] = useState([]);
    function saveuser() {
      console.log(name, email, mobile);
      let data = { name, email, mobile };
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        Headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((responce) => {
        console.log("result", responce);
  
        if (responce.status === 201) {
          setSave();
          setName("");
          setEmail("");
          setMobile("");
        } else {
          console.error("error occure");
        }
      });
    }
    return(
      <>
      <Nav/>
      
      <div className="Post">
        <Sidebar/>
        <div style={{marginLeft:500}}>
        <h1>POST API</h1>
        {!save && <h3>data save successfully</h3>}
        <label>Enter a Name</label> <br />
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          name="name"
        />
        <br /> <br />
        <label>Enter a Email</label> <br />
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="name"
        />
        <br /> <br />
        <label>Enter a Mobile</label> <br />
        <input
          type="text"
          value={mobile}
          onChange={(e) => {
            setMobile(e.target.value);
          }}
          name="name"
        />
        <br /> <br />
        <button class="button-85" type="button" onClick={saveuser}>
          SAVE
        </button>
      </div>
      </div>
      </>
    )
  }
  
  
  
  
  
  export default Post;
  