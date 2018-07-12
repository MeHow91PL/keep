import React from 'react'

const infoModal = ({ closeModal }) => {
    console.log(this.closeModal);

    return (
        <div
            className="modal-bg"
        >
            <div style={
                {
                    height: '400px',
                    width: '250px',
                    display: 'flex',
                    scrollBehavior: 'unset',
                    background: 'white',
                    boxShadow: '0 0 10px rgba(0,0,0,0.8)'
                }
            }>
                Info modal
            </div>
        </div>
    )
}

export default infoModal
