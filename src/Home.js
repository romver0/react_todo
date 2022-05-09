import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                {/* <Header/> */}
                <h1>Домашняя страница</h1>
                <div className="container">
                    <div className="wrap">
                        <button className="modal-btn" data-bs-toggle="modal" href="#exampleModalToggle" role="button">хочу Todo</button>
                        <a href="https://github.com/romver0?tab=repositories" target="_blank">
                            <button className="modal-btn" рк>чекни GitHub</button>
                        </a>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalToggleLabel">Нужно пройти регистрацию или войти</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            {/* <iframe width="853" height="480" src="https://www.youtube.com/embed/QI-bXKC2mvU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                            TODO - это общепринятое обозначение напоминания о том, что необходимо сделать. Произошло от понятия to do list, или список дел
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary" data-bs-target="#staticBackdropEntrance" data-bs-toggle="modal">Войти</button>
                                <button className="btn btn-primary" data-bs-target="#staticBackdropRegistration" data-bs-toggle="modal">Регистрация</button>
                            </div>
                        </div>
                    </div>
                </div>
                   
            </div>
        )
    }
}
