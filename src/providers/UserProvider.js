import {useState} from 'react'
import { UserContext } from '../contexts/UserContext'
import Address from '../pages/Address'

export default function UserProvider({ children }) {

    const [user, setUser] = useState(
        {
            name: '',
            data: '',
            telefone: '',

            Address: {
                rua: '',
                numero: '',
                cep: '',
                estado: ''
            }
        }
        
        
    );

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}