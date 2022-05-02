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
                                    <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdropEntrance">Вход</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdropRegistration">Регистрация</a>
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
                <div className="entrance">
                    {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Launch static backdrop modal
                    </button> */}
                    <div className="modal fade" id="staticBackdropEntrance" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Вход</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                                </div>
                                <Fragment>
                                    <FormEntrance/>
                                </Fragment>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="registration">
                    <div className="modal fade" id="staticBackdropRegistration" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Регистрация</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                                </div>
                                <Fragment>
                                        <FormRegistration/>
                                </Fragment>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

