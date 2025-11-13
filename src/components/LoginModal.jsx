
"use client";

import styled from "styled-components";
import { useState } from "react";

export default function LoginModal({ onClose }) {
  const [form, setForm] = useState({ email: "", senha: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", form);
    onClose();
  };

  return (
    <Overlay>
      <ModalBox>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="senha"
            placeholder="Senha"
            value={form.senha}
            onChange={handleChange}
            required
          />
          <Button type="submit">Entrar</Button>
        </Form>
        <CloseButton onClick={onClose}>Fechar</CloseButton>
      </ModalBox>
    </Overlay>
  );
}

// 💅 Estilos do modal
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
`;

const ModalBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  text-align: center;
  color: #1e293b;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: #10b981;
  color: white;
  font-weight: 600;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #059669;
  }
`;

const CloseButton = styled.button`
  margin-top: 1rem;
  background: none;
  color: #1e293b;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
