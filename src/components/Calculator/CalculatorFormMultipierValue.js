import React, { useState } from "react"

function CalculatorFormMultipierValue({ multipierValueHandler }) {
	const [multipierValue, setMultipierValue] = useState("")

	const valueMultipierHandler = (e) => {
		setMultipierValue(e.target.value)
		multipierValueHandler(e.target.value)
	}

	return (
		<div className="credit-form credit-form-number">
			<label>Wartość mnożnika:</label>
			<input onChange={valueMultipierHandler} type="number" placeholder="Wpisz wartosć mnożnika" value={multipierValue} min="0.3" max="1.5" step="0.01" />
		</div>
	)
}

export default CalculatorFormMultipierValue
