import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import { UserContext } from '../../contexts/UserContext';
import FormPersonal from '../../components/FormPersonal'
import DataUser from '../../components/DataUser';
import BackButton from '../../components/BackButton';


function Personal() {
    const navigate = useNavigate();
    const nav = () => {
        navigate('/address')
    }
    return(
        <section>
            <div>
                <Header title="DADOS PESSOAIS"/>
            </div>

            <div>
                <FormPersonal />
            </div>

            <div>
                <DataUser />
            </div>

            <div>
                <button type="button" onClick={nav}>Continuar</button>
            </div>

            <div>
                <BackButton />
            </div>
        </section>
    )
}

export default Personal