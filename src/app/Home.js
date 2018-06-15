import React, {Component} from 'react'

export default class home extends Component {
    render() {
        return (
            <div>
                <div className="top-bar">
                    <button className="menu-btn">M</button>
                    <div className="logo">Mehow Keep</div>
                    <div><input type="search" name="wyszukiwarka" id="wyszukiwarka"/></div>
                    <button className="odswiez-btn">O</button>
                    <button className="widok-btn">V</button>
                    <button className="profil-btn">P</button>
                </div>
                <div className="main-container">
                    <div className="sidebar">
                    <ul>
                        <li>Opcja1</li>
                        <li>Opcja2</li>
                        <li>Opcja3</li>
                        <hr />
                        <li>Opcja4</li>
                        <li>Opcja5</li>
                    </ul>
                    </div>
                    <div className="content">
                        <div className="dodajnotatke-input" placeholder="test" contentEditable>
                        Utwórz notatkę...
                        <div className="nowalista-btn"></div>
                        <div className="notatkaZdj-btn"></div>
                        <div className="notatkaRys-btn"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
