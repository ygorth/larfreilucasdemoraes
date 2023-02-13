import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.section`
margin: 0 auto;
  padding: 50px 10px;
  width: 100vw;
  max-width: 100%;
  background: #e8ebed;
  box-shadow: 9px 9px 18px #c5c8c9, -9px 4px 18px #ffffff;


`;


const Form = styled.form`
font-family: 'Roboto', sans-serif, Arial, Helvetica;
font-weight: bold;
background:#a7c4d2 ;
  color: #253D4A;
  padding: 40px 25px;
  border-radius: 15px;
  margin: 0 auto;
  place-content: center;
  max-width: 1000px;
  display: flex;
  flex-direction:column;

  h1{
    text-align: center;
    margin-bottom: 10px;
  }
 label{
  font-size: 1.2rem;
 }
 input{
  border: 0px;
  height: 50px;
  font-size: 1.2rem;
  padding: 10px;
transition: 0.4s;
outline: none;
  &:focus{
    border-radius: 15px;
  }
 }


textarea{
  transition: 0.4s;
  outline: none;
  padding: 10px;
  font-size: 1.2rem;
  &:focus{
    border-radius: 15px;
  }
}
 button{
  margin-top: 20px;
  cursor: pointer;
  transition: .4s ;
  border: 0px;
  border-radius: 10px;
  height: 40px;
  font-size: 1.3rem;
  width: 150px;
  align-self: center;

  &:hover{
    border-radius:20px;
  }
 }
`;

const validarEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$")

const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [emailErr, setEmailErr] = useState(false)
  const [nomeErr, setNomeErr] = useState(false)
  const [msgErr, setMsgErr] = useState(false);

function validate (){
  if(!validarEmail.test(email)){
    setEmailErr(true)
  }else{ setEmailErr(false)}
  if(nome === ''){
    setNomeErr(true)
  }else{setNomeErr(false)}
  if(mensagem === ''){
    setMsgErr(true)
  }else{setMsgErr(false)}


}




  return (
    <Container className="paginas">
      
      <Form onSubmit={(event)=> event.preventDefault()}>
          <h1>Entre em contato conosco</h1>
        <label htmlFor="nome">Nome</label>
        <input
        
          type="text"
          name="name"
          id="nome"
          placeholder="Digite seu nome"
          onChange={({ target }) => setNome(target.value)}
        />
        {nomeErr && <p>incira um nome</p>}
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="mail"
          id="email"
          placeholder="Digite seu email"
          onChange={({ target }) => setEmail(target.value)}
        /> {emailErr && <p>incira um email valido</p>}
        <label htmlFor="msg">Mensagem</label>
        <textarea
              id="msg"
              name="message"
              cols="30"
              rows="10"
              placeholder="digite sua mensagem"
              onChange={({ target }) => setMensagem(target.value)}
            />
            {msgErr && <p>incira uma mensagem</p>}
        <button onClick={validate}>Enviar</button>
      </Form>
     
    </Container>
  );
};

export default Contato;
