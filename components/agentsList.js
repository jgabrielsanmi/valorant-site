import useAgents from '../hooks/useAgents'
import Link from "next/link"
import Image from 'next/image'
import LoadingPage from '../components/loadingPage'
const width = 150
const height = 150

export default function () {

const agentsValorant = useAgents();

if (agentsValorant)
return(
    <div className="mt-2 ms-1 cards-grid-container ">
        {agentsValorant.map( agentValorant => {
            return (
                

                <div className="agent-card"  key={agentValorant.uuid}>
                    <div className="agent-img">
                    <Image src={agentValorant.fullPortrait} 
                            width={width}
                            height={height}
                            alt={agentValorant.displayName}
                            />
                    </div>
                    <div className="">
                        <span className="agent-name">
                            <h1 >{agentValorant.displayName}</h1>
                        </span>
                    </div>
                    
                    <Link href='/agentes/'>
                        <div className='valorant-button'>
                            <p className='detail-button'>
                                <span>
                                    Ver Detalle
                                </span>
                            </p>                       
                        </div>
                    </Link>
                </div>   
            )
        } )}
    
</div>) 


return (
    <LoadingPage/>)  

}