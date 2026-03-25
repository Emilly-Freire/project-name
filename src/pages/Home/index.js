import { useState, useContext } from 'react'
import { Container } from './styled.jsx'
import Header from '../../components/Header'
import Title from './../../components/Title'
import Counter from '../../components/Counter'
import { UserContext } from '../../contexts/UserContext';

function Home() {

  const { user, setUser } = useContext(UserContext);

  function onChangeName(event) {
    setUser({name: event.target.value})
  }

  return (
    <Container>
      <Header title="Home"/>
      <Title text="Página Inicial" backcolor="lightgreen" color="white"/>
      <Counter />
      <input type='text' onChange={onChangeName} value={user.name}/>
      <h3>{user.name}</h3>
    </Container>
  );

}

export default Home;
