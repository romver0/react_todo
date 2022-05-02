import React, { Component,Fragment } from 'react';
import FormEntrance from './FormEntrance';
import FormRegistration from './FormRegistration';
 
export default class Header extends Component {
    render() {
        
        return (
            // sm || ms
            <section className="Navbar">
               <nav className="navbar navbar-expand-ms navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Todoapp</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdropEntrance">Зверев Роман Евгеньевич(ИВТ-41-20)</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="../" >Выход</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" target="_blank" href="https://icons8.com/icon/62856/github">GitHub</a>
                                </li>
                                <li className="nav-item">
                                    icon by<a target="_blank" href="https://icons8.com">Icons8</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        )
    }
}

