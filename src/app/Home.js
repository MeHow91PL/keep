import React, {Component} from 'react';
import NotatkaInput from './NotatkaInput/NotatkaInputContainer';
import {connect} from 'react-redux';
import Notatka from './Notatka/Notatka';

 class Home extends Component {
    render() {
        return (
            <div id="PageContainer">
                <div className="top-bar">
                    <div className="menu btn">M</div>
                    <div className="logo"><span>Mehow</span> <span>Keep</span> </div>
                   <input type="search" name="wyszukiwarka" id="wyszukiwarka" placeholder="Szukaj..."/>
                    <div className="odswiez btn">O</div>
                    <div className="widok btn">V</div>
                    <div className="profil btn">P</div>
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
                        <NotatkaInput />
                        <div className="notatki-cont">
                            {
                                this.props.notatki.map(notatka =>
                                (
                                    <Notatka {...notatka} key={notatka.id} />
                                )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    notatki: state.ListaNotatek
})

export default connect(mapStateToProps)(Home);