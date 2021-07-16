

function StarWarsDisplay(props) {
  const { name, birth, height, mass, gender, message, num } = props

  if (num === 17) {
    return (
      <small>{message}</small>
    )
  }

  return (
    <div className="StarWarsDisplay">
      <h1>{name}</h1>
      <p>Birthyear: {birth}</p>
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
    </div>
  )
}

export default StarWarsDisplay