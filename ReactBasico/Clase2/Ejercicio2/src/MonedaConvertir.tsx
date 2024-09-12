import React from 'react'

function MonedaConvertir({cambioCompra, cambioVenta}: {cambioCompra: number, cambioVenta: number}) {
    const [dolaresCompra, setDolaresCompra] = React.useState(1)
    const [dolaresVenta, setDolaresVenta] = React.useState(1)
  return (
    <div>
        <br/>
            <p>Cantidad de dólares a comprar:   
                <input type="number" defaultValue={dolaresCompra} onChange={(ev)=>{
                        setDolaresCompra(ev.target.valueAsNumber)
                }}/>
            </p>
            <p>Cantidad de dólares a vender:   
                <input type="number" defaultValue={dolaresVenta} onChange={(ev)=>{
                        setDolaresVenta(ev.target.valueAsNumber)
                }}/>
            </p>
            
            <br/>
            <br/>
            <h2>Resultados de la conversíon</h2>
            <p>Dólares a Comprar: {dolaresCompra} Monto en Colones: {dolaresCompra * cambioCompra}</p>
            <hr />
            <p>Dólares a Vender: {dolaresVenta} Monto en Colones: {dolaresVenta * cambioVenta}</p>

    </div>

    
  )
}

export default MonedaConvertir