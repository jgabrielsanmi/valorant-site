import { useState, useEffect } from "react"
import axios from 'axios'
import Link from "next/link"
import Image from 'next/image'
import AgentsList from '../../components/agentsList'
import LoadingPage from '../../components/loadingPage'
const width = 100
const height = 100


export default function Agentes(){

const [agentsValorant, setAgentValorant] = useState([]);
const [loading, setLoading] = useState(false);

useEffect( () => {
    setLoading(true)
    axios.get('https://valorant-api.com/v1/agents?isPlayableCharacter=true').then( (res) => {
        if (res){
            setAgentValorant(res.data.data)
            setLoading(false)
        }else{
            alert("ERROR xd")
            setLoading(false)
        }
    })
}, [])



return (
    loading ? <LoadingPage/> :
        <AgentsList/>
    )
}