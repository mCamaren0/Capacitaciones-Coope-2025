import { useState } from "react"
import MonedaConvertir from "./MonedaConvertir"

function TipoCambioCapturar() {
    const [compra, setCompra] = useState(0)
    const [venta, setVenta] = useState(0)
    return (
        <div>
            <h3>Tipos de Cambio del Dólar</h3>
                <p>Compra:   
                    <input type="number" defaultValue={compra} onChange={(ev)=>{
                            setCompra(ev.target.valueAsNumber)
                    }}/>
                </p>

                <p>Venta:   
                    <input type="number" defaultValue={venta} onChange={(ev)=>{
                            setVenta(ev.target.valueAsNumber)
                    }}/>
                </p>

                <MonedaConvertir cambioCompra={compra} cambioVenta={venta}></MonedaConvertir>
        </div>
    )
}

export default TipoCambioCapturar