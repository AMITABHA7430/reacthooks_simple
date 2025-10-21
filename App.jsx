import { useState } from 'react'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Card />
    <Card name="John Doe" age="25" />
    <Card name="Jane Smith" age="30" />
    <Card name="Alice Johnson" age="28" />
    <Card name="Bob Brown" age="35" />
    <Card name="Charlie White" age="22" />
    <Card name="Diana Prince" age="27" />
    <Card name="Bruce Wayne" age="32" />
    <Card name="Clark Kent" age="29" />
    <Card name="Peter Parker" age="24" />
    <Card name="Tony Stark" age="40" />
    <Card name="Natasha Romanoff" age="33" />
    <Card name="Wanda Maximoff" age="26" />
    <Card name="Stephen Strange" age="38" />
    <Card name="Thor Odinson" age="1500" />
    <Card name="Loki Laufeyson" age="1048" />     
    </>
  )
}

export default App

