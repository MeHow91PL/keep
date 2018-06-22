import React from 'react';

const NotatkaInput = ({nowaNotka, dodajNotatke, zmienTekst, rozwinNotke, zwinNotke}) => {
    console.log(nowaNotka);
    let tytulInputRef,
        tekstInputRef;
    return (
        <div className={`dodajNotatke-input ${nowaNotka.aktywny}`}>
            <div className="tytul rozwiniete">
                <input
                    ref={node => tytulInputRef = node}
                    type="text"
                    name="nowaNotatkaTytuł"
                    id="nowaNotatkaTytuł"
                    onKeyUp={(e) => zmienTekst({
                    ...nowaNotka,
                    tytul: e.target.value
                })}
                    placeholder="Tytuł"/>
            </div>

            <div className="zwinietyInput">
                <div className="tekst">
                    <input
                        ref={node => tekstInputRef = node}
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
                    <div
                        className="DodajNotatke btn"
                        onClick={() => {
                        if (nowaNotka.tekst.trim() !== "") {
                            dodajNotatke(nowaNotka);
                            zmienTekst({tytul: '', tekst: ''});
                            tytulInputRef.value = '';
                            tekstInputRef.value = '';
                        };
                    }}>+</div>
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
                        if (nowaNotka.tekst.trim() !== "") {
                            dodajNotatke(nowaNotka);
                            zmienTekst({tytul: '', tekst: ''});
                            tytulInputRef.value = '';
                            tekstInputRef.value = '';
                        };
                        zwinNotke();
                    }}>Zamknij</div>
                </div>
            </div>
        </div>
    )
}

export default NotatkaInput;