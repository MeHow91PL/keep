import React from 'react'

const infoModal = ({ hideModal, id, tytul, tekst }) => {

    return (
        <div className="modal-bg">
            <div className="modal-dialog">
                <div className="bar">
                    <div className="btn" onClick={hideModal}>X</div>
                </div>
                <div className="content">
                    <div className="tytul">{tytul}</div>
                    <div className="tresc">{tekst}</div>
                </div>
                <div className="buttons-cont">
                    <div className="btn" onClick={hideModal}>Zamknij</div>
                </div>

            </div>
        </div>
    )
}

export default infoModal
