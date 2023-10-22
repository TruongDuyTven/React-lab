import { createContext, useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
/* global google */
const UserContext = createContext();

export function useUser() {
    return useContext(UserContext);
}


export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const handleCredentialResponse = (response) => {
        console.log("Encoded JWT ID token: " + response.credential);
        document.getElementById('buttonDiv').hidden = true;
        var decoded = jwt_decode(response.credential);
        setUser(decoded)
    }

    useEffect(() => {
        window.onload = function () {
            google.accounts.id.initialize({
                client_id: "955952875015-fbr4lff395pqihgs4fi56f106s82k6qh.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            google.accounts.id.renderButton(
                document.getElementById("buttonDiv"),
                { theme: "outline", size: "large" }
            );
            google.accounts.id.prompt();
        }
    }, [])

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}