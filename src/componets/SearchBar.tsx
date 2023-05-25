import React from "react";
import { useState } from "react";
import '../styles/searchbar.css'

export function SearcBar() {
  const [queryResults, setQueryResults] = useState([])

  function hello() {
    fetchQueryResults('gel').then(results => {
      console.log(results)
    })
  }

  async function fetchQueryResults(query: string) {
    let json = await fetch('http://localhost:8000/stockAutocomplete')
    let response = await json.json()
    return response
  }



  return (
    <section className="search-bar">
      <input onChange={hello} className="search-bar__input body-font-size" placeholder="Search here" ></input>
    </section>
  )
}
