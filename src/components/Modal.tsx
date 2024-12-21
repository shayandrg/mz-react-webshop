import ReactModal from 'react-modal';
import React from 'react';

const Modal = ({ isOpen, onRequestClose, product }: any) => (
<ReactModal isOpen={isOpen} onRequestClose={onRequestClose} className="modal">
  {product && (
    <div>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  )}
</ReactModal>
);

export default Modal;
