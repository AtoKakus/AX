import React, { useState } from "react"
//komponenty
import CalculatorPage from "../Calculator/CalculatorPage"
import LoginPanel from "./LoginPanel"
//scss
import "./scss/LoginPage.scss"

//// kod///

function LoginPage() {
	const [validation, setValidation] = useState(true)

	const logHandler = (userName, userPassword) => {
		if (userName === "ax" && userPassword === "euro") {
			setValidation(true)
		} else {
			setValidation(false)
		}
	}

	return <div className="loginpage">{validation ? <CalculatorPage /> : <LoginPanel logHandler={logHandler} validation={validation} />}</div>
}

export default LoginPage
