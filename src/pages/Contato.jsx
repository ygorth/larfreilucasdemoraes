import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const Container = styled.section`
  margin: 0 auto;
  padding: 50px 10px;
  width: 100vw;
  max-width: 100%;
  background: #e8ebed;
  box-shadow: 9px 9px 18px #c5c8c9, -9px 4px 18px #ffffff;
  display: grid;
  grid-template-columns: minmax(300px, 1000px);
  gap: 30px;
  place-content: center;
`;

const Form = styled.form`

  font-weight: bold;
  border-radius: 16px;
  background: #a7c4d2;
  box-shadow: 9px 9px 18px #788d97, -9px -9px 18px #d6fbff;
  color: #253d4a;
  padding: 40px 25px;
  margin: 0 auto;
  place-content: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 1000px;
  max-width: 100%;

  h1 {
    font-size: 2rem;
    font-family: 'Lobster', cursive;
    text-align: center;
    margin-bottom: 10px;
  }
  label {
    font-family: 'Lobster', cursive;
    font-size: 1.2rem;
  }
  input {
    font-weight: bold;
    border: 0px;
    height: 50px;
    font-size: 1.2rem;
    padding: 10px;
    transition: 0.4s;
    outline: none;
    margin-bottom: 20px;
    &:focus {
      border-radius: 15px;
    }
  }

  textarea {
    transition: 0.4s;
    outline: none;
    padding: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    &:focus {
      border-radius: 15px;
    }
  }
  button {
    margin-top: 20px;
    transition: 0.4s;
    border-radius: 10px;
    height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
    width: 150px;
    align-self: center;
    background: #253d4a;
    padding: 5px 15px;
    display: inline-block;
    border-radius: 5px;
    cursor: pointer;
    color: #a7c4d2;

    &:hover {
      border-radius: 20px;
    }
  }
`;
const Msg = styled.p`
  transition: 0.5s;
  margin-top: 10px;
  text-align: center;
`;
const Mapa = styled.iframe`
  height: 400px;
  width: 1000px;
  max-width: 100%;
  max-height: 100%;
  border-radius: 15px;
`;

const validarEmail = new RegExp(
  '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$',
);

const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [emailEnv, setEmailEnv] = useState(false);


  useEffect(()=>{
    window.scrollTo({top:0, left:0})
  },[])


  function sendEmail(event) {
    event.preventDefault();
    if (nome === '' || mensagem === '') {
      alert('Preencha todos os campos');
    } else if (!validarEmail.test(email)) {
      alert('Preencha um email valido');
    } else {
      const templateParams = {
        from_name: nome,
        message: mensagem,
        email: email,
      };
      emailjs
        .send(
          'service_website',
          'template_website',
          templateParams,
          '3NIv0ayDnX-sQzRbI',
        )
        .then(
          (resp) => {
            console.log('email enviado', resp.status, resp.text);
            setNome('');
            setEmail('');
            setMensagem('');
          },
          (err) => {
            console.log('ERRO', err);
          },
        );
      setEmailEnv(true);
    }
  }

  setTimeout(() => {
    if (emailEnv) {
      setEmailEnv(false);
    }
  }, 2000);

  return (
    <Container className="paginas">
      <Form onSubmit={sendEmail}>
        <h1>Entre em contato conosco</h1>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="name"
          id="nome"
          placeholder="Digite seu nome"
          onChange={({ target }) => setNome(target.value)}
          value={nome}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="mail"
          id="email"
          placeholder="Digite seu email"
          onChange={({ target }) => setEmail(target.value)}
          value={email}
        />{' '}
        <label htmlFor="msg">Mensagem</label>
        <textarea
          id="msg"
          name="message"
          cols="30"
          rows="10"
          placeholder="Digite sua mensagem"
          onChange={({ target }) => setMensagem(target.value)}
          value={mensagem}
        />
        {emailEnv && <Msg>Email Enviado!</Msg>}
        <button type="submit">Enviar</button>
      </Form>
      <Mapa
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7777.402438063098!2d-38.5051637!3d-12.9269149!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160f8aad4d64b7%3A0x5979ad4612615141!2sLar%20Frei%20Lucas%20de%20Mor%C3%A1es!5e0!3m2!1spt-BR!2sbr!4v1676651134887!5m2!1spt-BR!2sbr"
        referrerPolicy="no-referrer-when-downgrade"
      ></Mapa>
    </Container>
  );
};

export default Contato;
{
  /* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7777.402438063098!2d-38.5051637!3d-12.9269149!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160f8aad4d64b7%3A0x5979ad4612615141!2sLar%20Frei%20Lucas%20de%20Mor%C3%A1es!5e0!3m2!1spt-BR!2sbr!4v1676651134887!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */
}
