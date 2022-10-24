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
