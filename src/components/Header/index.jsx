import { useState, useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'



function Header({title}) {
    const { user, setUser } = useContext(UserContext);

    return(
        <header className='page-header'>
            <h1>{title}</h1>
            <h1>{user.name}</h1>
        </header>
    )
}

export default Header