import axios from "axios"
import { useEffect, useState } from "react"

function Players() {
const [playersInfo, setPlayersInfo] = useState([])
const baseUrl = "http://localhost:3000/api/players"

useEffect(()=> {
    getAllPlayers()
},[])

function getAllPlayers(){
    axios.get(baseUrl, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }).then((res) => {
        setPlayersInfo(res.data)
    })
}

function onClickDelete(deletePlayer) {
    console.log(deletePlayer);
    axios.delete(baseUrl+`/${deletePlayer._id}`).then((res) => {
        getAllPlayers()
    })

}

 return(
<div className="row">
    <div onClick={() => createPlayer()}>
        Create Player
    </div>
    {playersInfo.map((player) => {
        console.log(player, "player.name")
        return(
        <div className="card">
            <p>
                Name :<span>{player.name}</span>
            </p>
            <p>
                Number :<span>{player.number}</span>
            </p>
            <p>
                position :<span>{player.position}</span>
            </p>
            <div onClick={() => onClickDelete(player)}>Delete</div>
            </div>
    )
    })}
</div>
    )
}

export default Players