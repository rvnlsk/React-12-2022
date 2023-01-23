import { createContext, useState } from "react";


const AuthContext = createContext(null);

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(checkIfLoggedIn());

    function checkIfLoggedIn() {
        // tegelikkuses peaks tegema API paringu selle tokeni osas Firebase-i
        // fetch() siis kysib kas see on ikka paris token voi ei (praegu saab h2kkida)
        if (sessionStorage.getItem("token") !== null) {
            return true;
        } else {
            return false;
        }
    }
    

    return (
        <AuthContext.Provider value={{
            loggedIn: isLoggedIn,
            setLoggedIn: setIsLoggedIn
            
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}



export default AuthContext;