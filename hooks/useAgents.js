import { useState, useEffect } from "react"
import axios from 'axios'

export default function useAgents(){
    const [agentsValorant, setAgentValorant] = useState([]);
    
    useEffect( () => {
        axios.get('https://valorant-api.com/v1/agents?isPlayableCharacter=true').then( (res) => {
            if (res){
                setAgentValorant(res.data.data)
            }else{
                setAgentValorant([])
            }
        })
    }, [])

    return agentsValorant

}