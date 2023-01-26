import React, { useState } from "react"

import CalculatorFormCreditValue from "./CalculatorFormCreditValue"
import CalculatorFormMultipierValue from "./CalculatorFormMultipierValue"
import CalculatorFormRPO from "./CalculatorFormRPO"
import CalculatorFormASS from "./CalculatorFormASS"

import "./scss/CalculatorForm.scss"

function CalculatorForm() {
	const [creditValue, setCreditValue] = useState("")
	const [multipierValue, setMultipierValue] = useState("")
	const [RPOValue, setRPOValue] = useState("")
	const [ASSValue, setASSValue] = useState("")
	const [earnValue, setEarnValue] = useState(0)

	const payValue = 3.3;

	const creditValueHandler = (credit) => {
		setCreditValue(credit)
	}

	const multipierValueHandler = (multipier) => {
		setMultipierValue(multipier)
	}

	const RPOValueHandler = (RPO) => {
		setRPOValue(RPO)
	}

	const ASSValueHandler = (ASS) => {
		setASSValue(ASS)
	}

	const calculateEarnHandler = (e) => {
		e.preventDefault()

		const newRPOValue = parseInt(RPOValue)
		const newASSValue = parseInt(ASSValue)

		const earn = ((creditValue * newRPOValue + newASSValue) / 1000) * multipierValue * payValue

		setEarnValue(earn.toFixed(2))
	}

	return (
		<>
			{/* {console.log(ASSValue)} */}
			<div className="calculator-form">
				<form onSubmit={calculateEarnHandler}>
					<CalculatorFormCreditValue creditValueHandler={creditValueHandler} />
					<CalculatorFormMultipierValue multipierValueHandler={multipierValueHandler} />
					<CalculatorFormRPO RPOValueHandler={RPOValueHandler} />
					<CalculatorFormASS ASSValueHandler={ASSValueHandler} />
					<h2>{earnValue} zł</h2>
					<button typ="submit">Oblicz</button>
				</form>
			</div>
		</>
	)
}

export default CalculatorForm
