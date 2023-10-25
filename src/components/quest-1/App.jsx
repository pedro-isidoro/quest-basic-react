import { useState } from 'react'
import { UppercaseParagraph } from './App.js';
import './App.css'

function App() {
  const [text, setText] = useState('Era uma vez, um Pudim apaixonado, estava andando na rua quando foi atropeladooooo. Puts!! Pudim amassaaaaaadooo, Pudim amassaaaaaaado, Pudim amassaaaaaadoooo. Pudim Amassado morreeeeeeeeu!! ');
  const [colorText, setColorText] = useState('');

  return (
    <>
      <div>
        <div className='input-div'>
          <input className='text' type="text" onChange={(e)=>{setText(e.target.value)}} placeholder='Digite algo 😊'/>
          <input className='text' type="text" onChange={(e)=>{setColorText(e.target.value)}} placeholder='Digite uma cor em inglês ou Hexad.'/>
        </div>
        <div className='paragraph-div'>
          <p style={{color: colorText}} className='paragraph' id='paragraph'>{text}</p>
        </div>
        <button className='btn' onClick={()=>{UppercaseParagraph()}}>Uppercase</button>
      </div>
    </>
  )
}

export default App
