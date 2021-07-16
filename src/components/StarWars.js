import { useState } from "react";
import StarWarsDisplay from './StarWarsDisplay'

function StarWars() {
  const [num, setNum] = useState('')
  const [data, setData] = useState(null)

  async function fetchCharacter() {
    const path = `https://swapi.dev/api/people/${num}/`
    const res = await fetch(path)
    const json = await res.json()

    const message = `Please enter a different number!`
    if (num === 17) {
      setData({message})
      return
    }

    const name = json.name
    const birth = json.birth_year
    const gender = json.gender
    const height = json.height
    const mass = json.mass


    setData ({
      num,
      message,
      name,
      birth,
      gender,
      height,
      mass
    })
  }

  return (
    <div className="StarWars">
        <form onSubmit={e => {
          e.preventDefault()
          fetchCharacter()
        }}>
          <div>
            <input
              placeholder="Enter Number"
              value={num}
              onChange={e => setNum(e.target.value)}/>

              <button type="submit">Go!</button>
          </div>
        </form>
        {data && <StarWarsDisplay {...data}/>}
    </div>
  )

}

export default StarWars