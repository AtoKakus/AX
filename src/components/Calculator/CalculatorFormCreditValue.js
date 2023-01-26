import React, { useState } from "react"

function CalculatorFormCreditValue({ creditValueHandler }) {
	const [creditValue, setCreditValue] = useState("")

	const valueCreditHandler = (e) => {
		setCreditValue(e.target.value)
		creditValueHandler(e.target.value)
	}

	return (
		<div className="credit-form credit-form-number">
			<label>Wartość kredytu bez RPO:</label>
			<input onChange={valueCreditHandler} type="number" placeholder="Wpisz wartosć kredytu bez wartości RPO" min="300" value={creditValue} />
		</div>
	)
}

export default CalculatorFormCreditValue
