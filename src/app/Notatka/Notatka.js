import React from 'react';

const Notatka = ({ id, title: tytul = '', body: tekst, activeNote, deactiveNote, isActive, showModal }) => {

    return (
        <div className={`notatka ${isActive ? 'active' : ''}`}
           
            onClick={() => showModal({
                modalType: 'INFO_MODAL',
                modalProps: {
                    id, tytul, tekst
                }
            })}

        >
            <div
                className={`tytul ${tytul.trim() === ''
                    ? 'hidden'
                    : ''}`}>{tytul}</div>
            <div className="tresc" contenteditable="false" dangerouslySetInnerHTML={{ __html: tekst }} />
            <div className={`buttons`}>

                <div className="przypomnij btn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -2 48 48"
                        fill="#000000">
                        <path d="m0 0h48v48h-48z" fill="none" />
                        <path
                            d="m41.56 26.32l-12.11-6.03c-0.45-0.18-0.93-0.29-1.45-0.29h-2v-4h3.5c3.31 0 6-2.69 6-6s-2.69-6-6-6c-1.5 0-2.28 0.44-3.5 1.5v-1.5c0-2.21-1.79-4-4-4s-4 1.79-4 4v1.5c-1.22-1.06-2-1.5-3.5-1.5-3.31 0-6 2.69-6 6s2.69 6 6 6h3.5v16.63l-9.14-1.91c-0.2-0.04-0.41-0.07-0.63-0.07-0.83 0-1.58 0.34-2.12 0.88l-2.11 2.13 13.17 13.17c0.73 0.72 1.73 1.17 2.83 1.17h18.12c2.01 0 3.55-1.48 3.83-3.41l2.01-14.05c0.03-0.18 0.04-0.36 0.04-0.54 0-1.66-1.01-3.08-2.44-3.68zm-23.06-12.32h-4c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4v4zm7-4c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4h-4v-4z" />
                    </svg>
                </div>
                <div className="wspolpracownik btn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 18 18"
                        fill="#000000">
                        <path
                            d="m10 8c1.66 0 2.99-1.34 2.99-3s-1.33-3-2.99-3-3 1.34-3 3 1.34 3 3 3zm-6 2v-2h2v-2h-2v-2h-2v2h-2v2h2v2h2zm6 0c-2.33 0-7 1.17-7 3.5v2.5h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                        <path d="m0 0h18v18h-18z" fill="none" />
                    </svg>
                </div>
                <div className="zmienKolor btn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        fill="#000000">
                        <path
                            d="m24 6c-9.94 0-18 8.06-18 18s8.06 18 18 18c1.66 0 3-1.34 3-3 0-0.78-0.29-1.48-0.78-2.01-0.47-0.53-0.75-1.22-0.75-1.99 0-1.66 1.34-3 3-3h3.53c5.52 0 10-4.48 10-10 0-8.84-8.06-16-18-16zm-11 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm6-8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm10 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm6 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                        <path d="m0 0h48v48h-48z" fill="none" />
                    </svg>
                </div>
                <div className="dodajObraz btn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        fill="#000000">
                        <path d="m0 0h48v48h-48z" fill="none" />
                        <path
                            d="m42 38v-28c0-2.21-1.79-4-4-4h-28c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4zm-25-11l5 6.01 7-9.01 9 12h-28l7-9z" />
                    </svg>
                </div>
                <div className="archiwizuj btn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        fill="#000000">
                        <path
                            d="m41.09 10.45l-2.77-3.36c-0.56-0.66-1.39-1.09-2.32-1.09h-24c-0.93 0-1.76 0.43-2.31 1.09l-2.77 3.36c-0.58 0.7-0.92 1.58-0.92 2.55v25c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4v-25c0-0.97-0.34-1.85-0.91-2.55zm-17.09 24.55l-11-11h7v-4h8v4h7l-11 11zm-13.75-25l1.63-2h24l1.87 2h-27.5z" />
                        <path d="m0 0h48v48h-48z" fill="none" />
                    </svg>
                </div>
                <div className="wiecej btn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 12 16">
                        <path
                            d="m9 5.5c1 0 1.8-0.8 1.8-1.8s-0.8-1.7-1.8-1.7-1.8 0.8-1.8 1.8 0.8 1.7 1.8 1.7zm0 1.7c-1 0-1.8 0.8-1.8 1.8s0.8 1.8 1.8 1.8 1.8-0.8 1.8-1.8-0.8-1.8-1.8-1.8zm0 5.3c-1 0-1.8 0.8-1.8 1.8s0.8 1.7 1.8 1.7 1.8-0.8 1.8-1.8-0.8-1.7-1.8-1.7z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Notatka;