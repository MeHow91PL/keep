import React from 'react';

const Notatka = ({tytul,txt}) => {
    {}
    return (
        <div className="notatka">
            <div 
            className={`tytul ${tytul.trim() === '' ? 'hidden':''}`}

            >{tytul}</div>
            <div className="tresc">{txt}</div>
        </div>
    )
}

export default Notatka;