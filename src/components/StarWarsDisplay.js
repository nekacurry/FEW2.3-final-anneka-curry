

function StarWarsDisplay(props) {
  const { name, birth, height, mass, gender} = props

  if (props === null){
    return null
  }

  return (
    <div>
      <section>
        <h1>{name}</h1>
        <p>Birthyear: {birth}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
      </section>
  </div>
  )
}

export default StarWarsDisplay