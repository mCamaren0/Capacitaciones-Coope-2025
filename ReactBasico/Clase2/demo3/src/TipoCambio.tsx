import { useState } from "react"
import Compra from "./Compra"

function TipoCambio() {
    const [colones, setColones] = useState(0)
  return (
    <div>
        <h3>TipoCambio</h3>
        <p>Compra: {colones}</p>

        <input type="number" defaultValue={colones} onChange={(ev)=>{
            setColones(ev.target.valueAsNumber)
        }}/>

        <Compra cambioCompra={colones}></Compra>
    </div>
  )
}

export default TipoCambio