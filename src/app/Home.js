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
                    <div className="sidebar">sidebar</div>
                    <div className="content">
                        <div className="dodaj-notatke-input">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
