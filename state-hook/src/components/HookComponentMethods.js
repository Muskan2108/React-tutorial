import React,{useState,useEffect} from 'react'

function HookComponentMethods() {
    const[count, setCount]=useState(0)
    const[name, setName] = useState('')
    useEffect(() => { //useEffect is executed everytime component in rendered
        
        console.log("useEffect - Updating document title")
        document.title = `You clicked ${count} times`
    },[count])
    return (
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
        </div>
    )
}

export default HookComponentMethods
