import React from 'react';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

const Modal = ({ handleCloseModal, isOpen, children }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            parentSelector={() => document.querySelector('#root')}
            styles={{
                inst: '50%',
            }}
        >
            <button
                onClick={handleCloseModal}
                className='btn btn-primary d-block ms-auto'
            >
                &times;
            </button>
            {children}
        </ReactModal>
    );
};

export default Modal;
