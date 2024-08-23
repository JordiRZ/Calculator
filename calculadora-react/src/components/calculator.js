import React, { useState } from 'react'

const Calculator = () => {
  // vamos a preparar los estados vacios, los primeros alamcenaran los resultados despues de setearlos
  const [username, setUsername] = useState('')
  const [operand1, setOperand1] = useState('')
  const [operand2, setOperand2] = useState('')
  const [operand3, setOperand3] = useState('')
  const [result, setResult] = useState('')
  const [operationsHistory, setOperationsHistory] = useState([])

  const handleCalculate = () => {
    // los dos primeros son obligatorios, asi que vamos a dar un aviso al usuario si no los usa
    if (operand1 === '' || operand2 === '') {
      alert('Operand 1 y Operand 2 son obligatorios.')
      return
    }

    let calcResult
    // si son numericos se suman, si el 3ero esta vacio se considera 0
    // si alguno es un texto se concatena, es decir, si no es numerico
    if (!isNaN(operand1) && !isNaN(operand2) && (operand3 === '' || !isNaN(operand3))) {
      const num1 = parseFloat(operand1)
      const num2 = parseFloat(operand2)
      const num3 = operand3 !== '' ? parseFloat(operand3) : 0
      calcResult = num1 + num2 + num3
    } else {
      calcResult = operand1 + operand2 + operand3
    }
    
    // buscamos si se ah realizado la misma operacion antes
    const previousOperation = operationsHistory.find(
      entry => entry.operation === `${operand1}-${operand2}-${operand3}`
    )

    // si ya se ah realizado antes se muestra el resultado junto con el usuario
    // si es nueva se suma al historial
    if (previousOperation) {
      setResult(`Resultado: ${calcResult} (ya realizado por: ${previousOperation.username})`)
    } else {
      setOperationsHistory([...operationsHistory, { username, operation: `${operand1}-${operand2}-${operand3}`, result: calcResult }])
      setResult(`Resultado: ${calcResult}`)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Calculadora</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Nombre del usuario"
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <input
        type="text"
        value={operand1}
        onChange={(e) => setOperand1(e.target.value)}
        placeholder="Operand 1"
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <input
        type="text"
        value={operand2}
        onChange={(e) => setOperand2(e.target.value)}
        placeholder="Operand 2"
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <input
        type="text"
        value={operand3}
        onChange={(e) => setOperand3(e.target.value)}
        placeholder="Operand 3 (opcional)"
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <button
        onClick={handleCalculate}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Realizar Operación
      </button>
      <div className="result mt-4 text-center font-bold">{result}</div>
    </div>
  )
}

export default Calculator