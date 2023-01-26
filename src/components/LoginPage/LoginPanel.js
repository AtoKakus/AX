import React, { useState } from "react"

// komponenty

//scss
import "./scss/LoginPanel.scss"

function LoginPanel({ logHandler, validation }) {
	const [userName, setUserName] = useState("")
	const [userPassword, setUserPassword] = useState("")
	const [errorContent, setErrorContent] = useState("")

	const loginHandler = (e) => {
		setUserName(e.target.value)
	}
	const passwordHandler = (e) => {
		setUserPassword(e.target.value)
	}

	const submitHandler = (e) => {
		//Czyści formularz po wysłaniu oraz przekazuje dane komponent niżej
		e.preventDefault()
		logHandler(userName, userPassword)

		if (userName === "" || userPassword === "") {
			setErrorContent("Uzupełni wszystkie dane..")
		} else if (!validation) {
			setErrorContent("Błędne hasło..")
		} else {
			setErrorContent("")
			setUserName("")
			setUserPassword("")
		}
	}

	return (
		<div className="loginpanel">
			<h1>Logowanie</h1>
			<form onSubmit={submitHandler}>
				<div>
					<input onChange={loginHandler} placeholder="Wpisz login..." type="text" value={userName} />
				</div>

				<div>
					<input onChange={passwordHandler} type="password" placeholder="Wpisz hasło..." value={userPassword} />
				</div>
				<div>
					<p className="error">{errorContent}</p>
				</div>
				<div>
					<button typ="submit">
						<i className="fa-solid fa-right-to-bracket"></i>
					</button>
				</div>
			</form>

			<p>by Ato v1.1</p>
		</div>
	)
}

export default LoginPanel
