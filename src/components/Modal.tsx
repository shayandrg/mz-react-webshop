import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  product: {
    name: string;
    image: string;
    description: string;
    price: number;
  } | null;
}

const Modal = ({ isOpen, onRequestClose, product }: ModalProps) => (
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
