/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaRegWindowClose, FaGreaterThan } from 'react-icons/fa';
import {
  Button, Content, Footer, FullPage, Main, Title,
} from './styles';

const Modal = ({ setIsOpenModal }: any) => (
  <FullPage>
    <Main>
      <Title>Contact</Title>
      <a onClick={() => setIsOpenModal(false)}>
        <FaRegWindowClose />
      </a>
      <form
        onSubmit={() => {
          alert(
            'Deixei essa parte sem funcionar, pois não era requisitado no teste, mas para tratar os valores dos campos eu geralmente uso a lib react-hook-form.',
          );
        }}
      >
        <Content>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Fill your full name"
            required
          />

          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Fill a valid e-mail"
            required
          />

          <label htmlFor="">Phone</label>
          <input
            id="Phone"
            name="Phone"
            type="text"
            placeholder="Fill your phone"
          />

          <label htmlFor="post">Post</label>
          <textarea id="post" name="post" placeholder="Hello..." />
        </Content>
        <Footer>
          <Button type="submit">
            <div>
              <FaGreaterThan />
            </div>
            Submit
          </Button>
        </Footer>
      </form>
    </Main>
  </FullPage>
);

export default Modal;
