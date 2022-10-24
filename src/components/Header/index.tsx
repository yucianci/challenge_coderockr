/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Modal from '../Modal';
import { Navbar, Menu } from './styles';

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <>
      <Navbar>
        <h1>Rockr Blog</h1>
        <Menu>
          <a href="/">Posts</a>
          <a onClick={() => setIsOpenModal(true)}>Contact</a>
        </Menu>
      </Navbar>
      {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}
    </>
  );
};

export default Header;
