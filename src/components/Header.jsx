"use client";

import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import LoginModal from "./LoginModal";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Logo href="/">AnimeFlix Uninassau</Logo>

          <Nav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/animes">Animes</NavLink>
            <NavLink href="/animes/novo">Cadastrar</NavLink>

            <LoginButton onClick={() => setShowLogin(true)}>
              <FaUserCircle size={26} />
            </LoginButton>
          </Nav>
        </HeaderContent>
      </HeaderContainer>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
}



// 💅 Estilos do Header
const HeaderContainer = styled.header`
  background-color: #1e293b;
  color: white;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #10b981;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap; /* evita que o conteúdo estoure em telas pequenas */
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #10b981;
  }
`;

const LoginButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #10b981;
  }
`;
