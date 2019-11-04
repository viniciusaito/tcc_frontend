import React from 'react'
import logo from '../assets/agronomy1.svg'
import btnView from '../assets/viewgraph1.svg'
import btnRemove from '../assets/delete1.svg'
import './Main.css'

export default function Main({ match }) {
    return (
        <div className="main-container">
                <img src={logo} alt="Agronomy" width="200px" height="200px" />
            <ul>
                <li>
                    <img src="https://reshamas.github.io/assets/images/chart.png" alt="" />
                    <footer>
                        <strong>Station XPTO</strong>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={btnView} alt="View" />
                        </button>
                        <button type="button">
                            <img src={btnRemove} alt="Delete" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://reshamas.github.io/assets/images/chart.png" alt="" />
                    <footer>
                        <strong>Station XPTO</strong>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={btnView} alt="View" />
                        </button>
                        <button type="button">
                            <img src={btnRemove} alt="Delete" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://reshamas.github.io/assets/images/chart.png" alt="" />
                    <footer>
                        <strong>Station XPTO</strong>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={btnView} alt="View" />
                        </button>
                        <button type="button">
                            <img src={btnRemove} alt="Delete" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}