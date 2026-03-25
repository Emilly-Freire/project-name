import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header';
import DataUser from '../../components/DataUser';
import BackButton from '../../components/BackButton';

function Finish() {
    const navigate = useNavigate();
    const nav = () => {
        navigate('/personal')
    }
    return(
        <section>
            <div>
                <Header text="CADASTRO FINALIZADO!"/>
            </div>

            <div>
                <DataUser />
            </div>

            <div>
                <BackButton />
            </div>
        </section>
    )
}

export default Finish