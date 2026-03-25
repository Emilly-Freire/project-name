import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header';
import FormAddress from '../../components/FormAddress';
import DataUser from '../../components/DataUser';
import BackButton from '../../components/BackButton';


function Address() {
    const navigate = useNavigate();
    const nav = () => {
        navigate('/finish')
    }
    return(
        <section>
            <div>
                <div>
                    <Header text = "Endereço Residencial"/>
                </div>

                <div>
                    <FormAddress />
                </div>
                
                <div>
                    <button type="button" onClick={nav}>Continuar</button>
                </div>

                <div>
                    <DataUser />
                </div>

                <div>
                    <BackButton />
                </div>
            </div>
        </section>
    )
}

export default Address