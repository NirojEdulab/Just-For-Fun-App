import React, { useState } from "react";

const Form = () => {

  let API1 = "https://api.agify.io/?name="
  let API2 = "https://api.nationalize.io/?name="
  let API3 = "https://api.genderize.io/?name="

  const [name, setName] = useState('')
  const [disable, setDisable] = useState(1)
  const [clicked, setClicked] = useState(1)

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

  const resetButton = (e) => {
    setClicked(1)
  }
  const handleSubmit = (e) => {
    if (name.length >= 3) {
      e.preventDefault();
      setDisable(1)
      setClicked(0)
    } else {
      alert("Oops!!! Error Occured...")
    }

  }
  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])

  const apiGet1 = () => {
    fetch(API1 + name)
      .then((response) => response.json())
      .then((json) => {
        setData1(json)
      })
    fetch(API2 + name)
      .then((response) => response.json())
      .then((json) => {
        setData2(json.country.slice(0, 2))
      })
    fetch(API3 + name)
      .then((response) => response.json())
      .then((json) => {
        setData3(json)
      })
  }

  return (
    <div className="gamePage">
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
            <input type="text" placeholder="Enter Your First Name" onChange={e => handleName(e)} />
            <br />
            <br />
            <button className="btn btn-primary" disabled={disable} id="submit" type="submit" onClick={apiGet1}>Check Fun</button>
            <button className="btn btn-danger" id="reset" type="reset" onClick={resetButton}>Reset</button>
          </form>
        </center>
      </div>
      <div className="tableContainer">
      <table hidden={clicked} className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Top Two Countries</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <th>{data1.name}</th>
            <th>{JSON.stringify(data3.gender)}</th>
            <th>{JSON.stringify(data1.age)}</th>
            {data2.map((c, i) => (
              <td key={i}>
                {c.country_id + ", Probability => "}
                {c.probability}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
};


export default Form