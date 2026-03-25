import {useContext} from 'react'
import { UserContext } from '../../contexts/UserContext'
import { Container } from './styled'
import Header from '../../components/Header'
import Title from './../../components/Title'

export default function Contact() {

    const { user } = useContext(UserContext)
    return (
        <Container>
            <Header title="Contact"/>
            <Title text="Página de Contato" backcolor="orange" color="white"/>
            <h3>{user.name}</h3>
        </Container>
    )

}