//React
import React from 'react';
//Routing
import { Link } from 'react-router-dom';
// import { push } from 'connected-react-router'
import '../paths'
import { searchMain } from '../paths';

const checkSidebarDisplay = (showSidebar) => {
    if (showSidebar != null) {
        return showSidebar ? 'show' : 'hide';
    }
    else return "";
}

const Sidebar = ({ showSidebar, toggleSidebar }) => {
    return (
        <div>
            <div className={`sidebar ${checkSidebarDisplay(showSidebar)}`}
            >
                <div className={`sidebar-content`}>
                    <div>
                        <div className="ikona">Ico</div>
                        <div className="text">
                            <Link to={searchMain}>
                                SearchView
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className="ikona">Ico</div>
                        <div className="text">Home</div>
                    </div>  <div>
                        <div className="ikona">Ico</div>
                        <div className="text">Remove</div>
                    </div>  <div>
                        <div className="ikona">Ico</div>
                        <div className="text">Notatki</div>
                    </div>
                    <div>
                        <div className="ikona">Ico</div>
                        <div className="text">Przypomnienia</div>
                    </div>
                    <hr />
                    <div>
                        <div className="ikona">Ico</div>
                        <div className="text">Etykiety</div>
                    </div>
                    <div>
                        <div className="ikona">Ico</div>
                        <div className="text">Etykiety</div>
                    </div>
                    <div>
                        <div className="ikona">Ico</div>
                        <div className="text">Etykiety</div>
                    </div>
                    <div>
                        <div className="ikona">Ico</div>
                        <div className="text">Etykiety</div>
                    </div>
                    <div>
                        <div className="ikona">Ico</div>
                        <div className="text">Etykiety</div>
                    </div>
                    <hr />
                    <div>
                        <div className="ikona">Ico</div>
                        <div className="text">Archiwum</div>
                    </div>
                    <div>
                        <div className="ikona">Ico</div>
                        <div className="text">Kosz</div>
                    </div>
                    < hr />
                    <div>
                        <div className="ikona">Ico</div>
                        <div className="text">Ustawienia</div>
                    </div>
                    <div>

                        <div className="ikona">Ico</div>
                        <div className="text">Prześlij opinię</div>
                    </div>
                    <div>
                        <div className="ikona">Ico</div>
                        <div className="text">Pomoc</div>
                    </div>
                    <div>
                        <div className="ikona">Ico</div>
                        <div className="text">Pliki pobrane z aplikacji</div>
                    </div>
                    <div>
                        <div className="ikona">Ico</div>
                        <div className="text">Skróty klawiszowe</div>
                    </div>
                </div>
            </div>
            <div className={`test ${checkSidebarDisplay(showSidebar)}`} onClick={toggleSidebar}
                onWheel={(e) => { e.preventDefault() }}
            ></div>
        </div>

    )
}

export default Sidebar