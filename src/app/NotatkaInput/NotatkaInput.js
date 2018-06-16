import React from 'react';

const NotatkaInput = ({nowaNotka, dodajNotatke, zmienTekst, rozwinNotke, zwinNotke}) => {
    console.log(nowaNotka.aktywny);

    return (
        <div className={`dodajNotatke-input ${nowaNotka.aktywny}`}>
            <div className="tytul rozwiniete">
                <input
                    type="text"
                    name="nowaNotatkaTytuł"
                    id="nowaNotatkaTytuł"
                    onKeyUpCapture={(e) => zmienTekst({
                    ...nowaNotka,
                    tytul: e.target.value
                })}
                    placeholder="Tytuł"/>
            </div>
            <div className="zwinietyInput">
                <div className="tekst">
                    <input
                        type="text"
                        name="nowaNotatkaTekst"
                        id="nowaNotatkaTekst"
                        placeholder="Utwórz notatke..."
                        onKeyUpCapture={(e) => zmienTekst({
                        ...nowaNotka,
                        tekst: e.target.value
                    })}
                        onFocus={rozwinNotke}/>
                </div>
                <div className="buttons-cont zwiniete">
                    <div className="DodajNotatke btn" onClick={() => dodajNotatke(nowaNotka)}>+</div>
                    <div className="NotatkaNowaLista btn"></div>
                    <div className="NotatkaFoto btn"></div>
                    <div className="NotatkaRys btn"></div>
                </div>
            </div>
            <div className="rozwiniete">
                <div className="buttons-cont">
                    <div className="btn"></div>
                    <div className="btn"></div>
                    <div className="btn"></div>
                    <div className="btn"></div>
                    <div className="btn"></div>
                    <div className="btn"></div>
                    <div className="btn"></div>
                    <div className="btn"></div>
                </div>
                <div className="buttons-cont zamknij-cont">
                    <div
                        className="zamknij btn"
                        onClick={() => {
                        dodajNotatke(nowaNotka);
                        zwinNotke();
                    }}>Zamknij</div>
                </div>
            </div>
        </div>
    )
}

export default NotatkaInput;