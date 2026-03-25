import styled from 'styled-components'
import { UserContext } from '../../contexts/UserContext';
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, name: e.target.value });
    };

    const nav = () => {
        navigate('/personal')
    }
    return(
        <section>
            <div>
                <h1>FORMULÁRIO DE CADASTRO</h1>
                <div>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={user.name}
                    onChange={handleChange}
                />
                </div>
                <div>
                    <button type="button" onClick={nav}>Continuar</button>
                </div>
            </div>
        </section>
    )
}

export default Home