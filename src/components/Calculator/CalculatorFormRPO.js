import React, { useState } from "react"

function CalculatorFormRPO({ RPOValueHandler }) {
	const [valueRPO, setValueRPO] = useState("")

	const valueRPOHandler = (e) => {
		setValueRPO(e.target.value)
		RPOValueHandler(e.target.value)
	}

	return (
		<div className="credit-form">
			<label className="label-title">Jaki kredyt spisałeś? </label>
			<div className="credit-form-box">
				<div>
					<input onChange={valueRPOHandler} type="radio" name="RPO" value="2" />
					<label>Zero</label>
				</div>

				<div>
					<input onChange={valueRPOHandler} type="radio" name="RPO" value="3" />
					<label>Oprocentowanie</label>
				</div>

				<div>
					<input onChange={valueRPOHandler} type="radio" name="RPO" value="4" />
					<label>RPO</label>
				</div>

				<div>
					<input onChange={valueRPOHandler} type="radio" name="RPO" value="5" />
					<label>RPO z %</label>
				</div>
			</div>
		</div>
	)
}

export default CalculatorFormRPO
