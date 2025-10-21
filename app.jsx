import { useState } from 'react'

import './App.css'

function App() {
  
let [color,setcolor] = useState('black')
  return (
    <>
      <div className='w-full h-screen duration-200 bg-amber-600' style={{background:color}}>
      <div className='fixed flex flex-wrap justifu-center gap-3 shadow-amber-500 bg-amber-300 bottom-12 pz-2 mx-2 my-2 mz-2 ml-135 px-2 py-2 rounded-2xl '>
        <button onClick={()=>setcolor('green')} className='outline-none px-4 py-4'style={{background:'green'}}>green</button>
        <button onClick={()=>setcolor('blue')} className='outline-none px-4 py-4' style={{background:'blue'}}>blue</button>
        <button onClick={()=>setcolor('yellow')} className='outline-none px-4 py-4' style={{background:'yellow'}}>yellow</button>   

        <button onClick={()=>setcolor('red')} className='outline-none px-4 py-4' style={{background:'red'}}>red</button>
        <button onClick={()=>setcolor('purple')} className='outline-none px-4 py-4' style={{background:'purple'}}>purple</button>
        <button onClick={()=>setcolor('black')} className='outline-none px-4 py-4' style={{background:'black', color:'white'}}>black</button>
        
       
       
      </div>
      </div>
    </>
  )
}

export default App
