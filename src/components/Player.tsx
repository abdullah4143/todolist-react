import {useState} from 'react'

const Player = () => {

  const [game, setGame] = useState({
    id: 1,
    player: {
      name:"Abdullah",
    }
  });

  function HandleClick(){
    setGame({...game , player: {name: "John"}});
  }

  return (
    <>
    <h1>Player: {game.player.name} Id: {game.id}</h1>
    <button className='btn btn-primary' onClick={()=>HandleClick()}>Change Name</button>
    </>
  )
}

export default Player