import { useState } from "react";
import StarWarsDisplay from './StarWarsDisplay'
// import List from './List'


function StarWars(props) {
  const [num, setNum] = useState('')
  const [data, setData] = useState(null)

  const [list, setList] = useState([])
  
// Call Chara Data API
  async function fetchCharacter() {
    
    const path = `https://swapi.dev/api/people/${num}/`
    const res = await fetch(path)
    const json = await res.json()

    const name = json.name
    const birth = json.birth_year
    const gender = json.gender
    const height = json.height
    const mass = json.mass
    const homeworld = json.homeworld
    const films = json.films

    if ( json === null ) {
      return undefined
    }


    if(json.homeworld){
      const homeP = `https://swapi.dev/api/planets/${num}/`
      const homeRes = await fetch(homeP)
      const homeJSON = await homeRes.json()
      json.homeworld = homeJSON
      setData(json)
    }

    if(json.films){
      const filmsRes = await Promise.all(json.films.map(film => fetch(film)))
      const filmsJSON = await Promise.all(filmsRes.map(res => res.json))
      json.films = filmsJSON
      setData(json)
    }

    setData ({
      num,
      name,
      birth,
      gender,
      height,
      mass,
      homeworld,
      films
    })
  }


// Create List
  const charList = list.map(chara => {
    return(
          <div className="card">
            <h1>{chara.name}</h1>
            <p>Birthyear: {chara.birth}</p>
            <p>Gender: {chara.gender}</p>
            <p>Height: {chara.height}</p>
            <p>Mass: {chara.mass}</p>

            <h2>Homeworld</h2>
            <p>Planet: {chara.homeworld.name}</p>

            <h2>Films</h2>
            {chara.films.map(film => {
              return (
                <p>{film.title}</p>
              )
            })}
          </div>

      )
    })

// Return
  return (
    <div className="container">
      <section> 
        <h2>Enter Character ID</h2>
        <form onSubmit={e => {
          e.preventDefault()
          fetchCharacter()
        }}>
          <div>
            <input
              placeholder="nums 1-16 or 18-83"
              value={num}
              onChange={e => setNum(e.target.value)}/>

              <button type="submit">Go!</button>
          </div>
        </form>
        </section>

        <div>
          <section>
          {data && <StarWarsDisplay {...data}/>}

          <button className="list-b" onClick={e => {
            setList([...list, data])
          }}>Save</button>
          </section>
        </div>

        <div>
          <section className='list'>
            {list && charList}  
          </section>
        </div>
    </div>
  )

}


export default StarWars