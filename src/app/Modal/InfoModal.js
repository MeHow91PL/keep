import React from 'react'

const infoModal = ({closeModal}) => {
    console.log(this.closeModal);
    
    return (
        <div
            style={
                {
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    scrollBehavior: 'unset',
                    background: 'rgba(0,0,0,0.5)',
                    overflow: 'hidden',
                    pointerEvents: 'all',
                    justifyContent: 'center',
                    alignItems: 'center'
                }
            }
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
