import { useState } from "react"

const UseError = () => {
    const [message,setMessage] = useState(null);

    const setErrorMessage = (result) => {
        setMessage(result);
    }
    return {message,setErrorMessage}

}
export default UseError;