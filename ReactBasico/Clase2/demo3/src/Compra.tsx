import React from 'react'

function Compra({cambioCompra}: {cambioCompra: number}) {
  const [dolares, setDolares] = React.useState(1)
  return (
    
    <div>
      <h6>Compra</h6>
      <input type="number" value={dolares} onChange={(ev) =>{
        setDolares(ev.target.valueAsNumber)
      }} />

      <hr />
      <p>Monto en Colones: {dolares * cambioCompra}</p>
    </div>
  )
}

export default Compra