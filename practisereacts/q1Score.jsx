import { useState ,useEffect,useRef} from "react";

function Counter(){
    const [count,setCount] = useState(0)
    const [name, setName] = useState("")
    const PlayerName = useRef(null)

     useEffect(() => {
        document.title = `Score: ${count}`
        
    }, [count])
    
    useEffect(() => {
        console.log("ScoreBoard loaded!")
        PlayerName.current.focus() 
            }, [])

    return (
        <div>

            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={() => setCount(count + 4)}>Boundary</button>
            <button onClick={() => setCount(count + 6)}>Sixer</button>

            <input 
    ref={PlayerName} 
    placeholder="Player Name..."
    onChange={(e) => setName(e.target.value)}
/>
<button onClick={() => {
    PlayerName.current.value = ""
    PlayerName.current.focus()
}}>Clear Name</button>
            <h2>{name}: {count}</h2>
           
            
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}