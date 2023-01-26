import React, { useState } from "react"

function CalculatorFormASS({ ASSValueHandler }) {
	const [valueASS, setValueASS] = useState("")

	const valueASSHandler = (e) => {
		setValueASS(e.target.value)
		ASSValueHandler(e.target.value)
	}

	return (
		<div className="credit-form">
			<label className="label-title">Czy sprzedałeś ASS'a? </label>
			<div className="credit-form-box">
				<div>
					<input onChange={valueASSHandler} type="radio" name="ass" value="0" />
					<label>Nie</label>
				</div>
				<div>
					<input onChange={valueASSHandler} type="radio" name="ass" value="1000" />
					<label>ASS1</label>
				</div>
				<div>
					<input onChange={valueASSHandler} type="radio" name="ass" value="2000" />
					<label>ASS3</label>
				</div>
			</div>
		</div>
	)
}

export default CalculatorFormASS
