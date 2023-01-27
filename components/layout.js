import Header from './header'

const layout = ({children}) => {                
    return (                                                                                                                
        
        <>
            <Header/>
            <>{ children }</>
        </>
        
    )
}
    
export default layout
