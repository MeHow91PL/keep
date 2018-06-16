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
                            <li>Opcja</li>
                            <li>Opcja</li>
                            <li>Opcja</li>
                            <li>Opcja</li>
                            <hr/>
                            <li>Opcja</li>
                            <li>Opcja</li>
                        </ul>
                    </div>
                    <div className="content">
                        <div className="dodajNotatke-input" contentEditable>
                            <span>Utwórz notatke...</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
