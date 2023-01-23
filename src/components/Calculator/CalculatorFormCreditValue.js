import React,{useState} from "react"


function CalculatorFormCreditValue({creditValueHandler}) {
	const [creditValue, setCreditValue]=useState('')
	

	const valueCreditHandler = (e) =>{
		setCreditValue(e.target.value)
		creditValueHandler(e.target.value)
	} 
	
	
	return (
		<div className="credit-form credit-form-number">
			<label>Wartość kredytu:</label>
			<input onChange={valueCreditHandler} type="number" placeholder="Wpisz wartosć kredytu" min="300" value={creditValue} />
		</div>
		
	)
}

export default CalculatorFormCreditValue
