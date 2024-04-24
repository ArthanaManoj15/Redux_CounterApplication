import { useState } from 'react'
import Counter from './components/Counter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
        <div className='p-5 rounded' style={{backgroundColor:'white',width:'50%'}}>
          <h1 className='text-center text-primary mt-4 heading'>Counter Application</h1>
          <Counter/>
        </div>
      </div>
    </>
  )
}

export default App
