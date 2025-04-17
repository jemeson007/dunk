'use client'

import { p } from '@/app/actions'
import React, { useState } from 'react'
export default function Page(){

// const tft = () =>{
  const [pp, setPp] = useState('')
  const [ftt, setFtt] = useState('')

// }

const handleSubmit = (e) =>{
  e.preventDefault()
  // const plr1:string[] = []
  // const plr2:string[] = []
  const fd = { pp, ftt }
  console.log(fd)
  const dv = document.createElement("div")
  const dv3 = document.createElement("h3")
  dv.textContent = pp 
  dv3.textContent = ftt 

  document.body.appendChild(dv3)
  document.body.appendChild(dv)

  // plr1.push(pp)
  // plr2.push(ftt)
}

//   useEffect(() =>{
//  let fp:HTMLInputElement = document.getElementById('pp') as HTMLInputElement;
//         let f:HTMLInputElement = document.getElementById('ftt') as HTMLInputElement;
//         let r:HTMLParagraphElement = document.getElementById('r') as HTMLParagraphElement;
//         let ft:HTMLParagraphElement = document.getElementById('ft') as HTMLParagraphElement;
//         let ppp:string;
//         let pp2:string;

//         document.getElementById('submit').addEventListener('click', function(){
//           ppp = fp.value;
//           pp2 = f.value;
//           r.textContent ='P: '+  ppp;
//           ft.textContent = 'Sl: '+ pp2;

//         });onClick={() => hClick()}
//   })

       
  return (  
    <div>
      
     
      <h3>Hey again</h3>
      
      <form action={p} onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" name="pp" value={pp} onChange={(e) => setPp(e.target.value)}/><br /><br />
        <label>Aspect: </label>
        <input type="text" name="ftt" value={ftt} onChange={(e) => setFtt(e.target.value)}/><br /><br />
        <button id= "submit" type="submit">Prd</button>
      </form>
      <style>
       
      </style>
    </div>
    )
}