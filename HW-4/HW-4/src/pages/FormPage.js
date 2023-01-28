import React, {useState} from 'react'




function FormPage() {

    const [login, setLogin] = useState(false)
    const [pass, setPass] = useState(false)
    const [check, setCheck] = useState(true)
    const [send, setSend] = useState(true)

    const handleChange  = event  =>{
        if (event.target.checked) {
            setLogin(true)
            setPass(true)
            setSend(false)
        } else {
            setLogin(false)
            setPass(false)
            setSend(true)
        }
        setCheck(check => !check)
    }

    return (
        <div >
            <form>
                <label for="login">Login:</label>
                <input type="text" name="login" disabled={login}/>
                <label for="pass">Password:</label>
                <input type="password" name="pass" disabled={pass}/>
                <input type="checkbox" value={check} onChange={handleChange }/>
                <input type="submit" value="Send" disabled={send}/>
            </form>
        </div>
    )
}

export default FormPage