import React from 'react'

const infoModal = ({ hideModal, id, tytul, tekst }) => {

    return (
        <div className="modal-bg" onClick={hideModal}>
            <div className="modal-dialog">
                <div className="bar">
                    <div className="btn" onClick={hideModal}>X</div>
                </div>
                <div className="content" onClick={(e) => { e.stopPropagation() }}
                >
                    <div className="tytul">{tytul}</div>
                    <div className="tresc" dangerouslySetInnerHTML={{ __html: tekst }} />
                </div>
                <div className="buttons-cont">
                    <div className="btn" onClick={hideModal}>Zamknij</div>
                </div>

            </div>
        </div>
    )
}

export default infoModal
