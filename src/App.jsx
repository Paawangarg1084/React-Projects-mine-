import { useState } from "react"

function App() {
  const [color, setColor] = useState("pink")  // ✅ Fixed initial value

  return (
    <div 
      className="w-screen h-screen duration-200 flex items-center justify-center p-0 m-0"
      style={{ backgroundColor: color }}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button 
            onClick={() => setColor("red")}  // ✅ React onClick
            className="outline-none px-3 py-2 rounded-full text-white shadow-lg hover:scale-105"
            style={{backgroundColor: "red"}}>
            Red
          </button>
          
          <button 
            onClick={() => setColor("rgba(255, 0, 217, 0.99)")}  
            className="outline-none px-3 py-2 rounded-full text-white shadow-lg hover:scale-105"
            style={{backgroundColor: "rgba(255, 0, 217, 0.99)"}}>
            Pink
          </button>
          
          <button 
            onClick={() => setColor("yellow")}  
            className="outline-none px-3 py-2 rounded-full text-black shadow-lg hover:scale-105"
            style={{backgroundColor: "yellow"}}>
            Yellow
          </button>
          
          <button 
            onClick={() => setColor("purple")} 
            className="outline-none px-3 py-2 rounded-full text-white shadow-lg hover:scale-105"
            style={{backgroundColor: "purple"}}>
            Purple
          </button>
          
          <button 
            onClick={() => setColor("orange")} 
            className="outline-none px-3 py-2 rounded-full text-white shadow-lg hover:scale-105"
            style={{backgroundColor: "orange"}}>
            Orange
          </button>
          
          <button 
            onClick={() => setColor("blue")} 
            className="outline-none px-3 py-2 rounded-full text-white shadow-lg hover:scale-105"
            style={{backgroundColor: "blue"}}>
            Blue
          </button>
          
          <button 
            onClick={() => setColor("green")} 
            className="outline-none px-3 py-2 rounded-full text-white shadow-lg hover:scale-105"
            style={{backgroundColor: "green"}}>
            Green
          </button>
        </div>  
      </div>
    </div>
  )
}

export default App
