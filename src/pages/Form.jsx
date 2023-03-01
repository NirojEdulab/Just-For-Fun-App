import React, { useState } from "react";

const Form = () => {
  
  let API1 = "https://api.agify.io/?name="
  let API2 = "https://api.nationalize.io/?name="
  let API3 = "https://api.genderize.io/?name="

  const [name, setName] = useState('')
  const [disable, setDisable] = useState(1)
  // let [dataValueAge, setDataValueAge] = useState([])

  
  const handleName = (e) => {
    const getName = e.target.value;
    let string = getName;
    const result = string.replace(/[^a-zA-Z]/g, "")
    if (result.length >= 3) {
      setName(result)
      setDisable(0)
    } else {
      setDisable(1)
    }

  }
  const handleSubmit = (e) => {
    if(name.length>=3){
      e.preventDefault();
      setDisable(1)
    }else{
      alert("Oops!!! Error Occured...")
    }
    
  }
  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])

  const apiGet1 = ()=>{
    fetch(API1+name)
    .then((response) => response.json())
    .then((json)=>{
      setData1(json)
    })
    fetch(API2+name)
    .then((response) => response.json())
    .then((json)=>{
      setData2(json)
    })
    fetch(API3+name)
    .then((response) => response.json())
    .then((json)=>{
      setData3(json)
    })
  }



  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <h1>You can start now</h1>
        </div>
      </div>
      <div className="container content">
        <center><span><i>Type anything here, it will take the characters only...</i></span></center>
        <hr />
        <center>
          <br />
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Your Name" onChange={e => handleName(e)} />
            <br />
            <br />
            <button disabled={disable} id="submit" type="submit" onClick={apiGet1}>Check Fun</button>
          </form>
        </center>
      </div>
      <table className="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Gender</th>
      <th>Age</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>{name}</th>
      <th>{JSON.stringify(data1.id)}</th>
      <th>{JSON.stringify(data2.brand)}</th>
      <th>{JSON.stringify(data3.name)}</th>
    </tr>
  </tbody>
</table>
    </main>
  )
};


export default Form