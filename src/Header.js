import React, { Component,Fragment} from 'react';
import Home from './Home';
import Kanban from './Kanban';
 
export default class Header extends Component {
    constructor(props){
        super(props);
        // this.state={
        //     visibility:true,
        //     email:"",
        //     password:"",
        //     emailDirty:false,
        //     passwordDirty:false,
        //     emailError:'Емейл не может быть пустым!',
        //     passwordError:'Пароль не может быть пустым!',
        //     formValidEmail:false,
        //     formValidPassword:false
        // };
        this.state=JSON.parse(window.localStorage.getItem('state'))||{
            visibility:true,
            email:"",
            password:"",
            emailDirty:false,
            passwordDirty:false,
            emailError:'Емейл не может быть пустым!',
            passwordError:'Пароль не может быть пустым!',
            formValidEmail:false,
            formValidPassword:false
        };
       
    this.handleClick=this.handleClick.bind(this);
    this.emailHandler=this.emailHandler.bind(this);
    this.passwordHandler=this.passwordHandler.bind(this);
    this.blurHandler=this.blurHandler.bind(this);
    this.setState=this.setState.bind(this);
    }
    setState(state){
        window.localStorage.setItem('state',JSON.stringify(state));
        super.setState(state);
    }
    // setRepeat(repeat){
    // window.localStorage.setItem('repeat',JSON.stringify(repeat));
    // super.setRepeat(repeat);
    // }
    handleClick(){
        this.setState({
                visibility:!this.state.visibility
        });
    }

    emailHandler(element){
        // this.setState(state=>({
        //     email:element.target.value
        // }));
        this.setState({email:element.target.value});
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(element.target.value).toLowerCase())){
        this.setState({emailError:'Неккоретный email'});
        this.setState({formValidEmail:false});
        }else{
            this.setState({emailError:""});
            if(element.target.value==='roma_zverev2002@mail.ru'){
                this.setState({formValidEmail:true});
            }
        }
    }

    passwordHandler(element){
        this.setState({password:element.target.value});
        if (element.target.value.length<5 || (element.target.value.length>10)){
          this.setState({passwordError:'Пароль должен быть блинее 5 и меньше 10'});
          this.setState({formValidPassword:false});
          if(!element.target.value){
            this.setState({formValidPassword:false});
            this.setState({passwordError:'Пароль не может быть пустым'});

          }
        }
        else if(element.target.value==='111111'){
            this.setState({formValidPassword:true});
        }
        else{
          this.setState({passwordError:''});
          this.setState({formValidPassword:false});
        }
    }
      blurHandler(element){
        switch(element.target.name){
          case 'email':
            this.setState({emailDirty:true});
            break;
          case 'password':
            this.setState({passwordDirty:true});
            break;
            
        }
      }
      
    render() {
        // const [email,setEmail]=useState("");
        if(this.state.visibility){

        return (
                // sm || ms
                <section className="Navbar">
                <nav className="navbar navbar-expand-ms navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#" onClick={this.handleClick}>Todoapp</a>
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
                        <div className="modal fade" id="staticBackdropEntrance"  data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">Вход</h5>
                                        {/* {!(this.state.formValidEmail && this.state.formValidPassword)||<h6 style={{color:'red'}}>Перезагрузи страницу</h6>} */}
                                        
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                                    </div>
        
                                    <div className="modal-body">
                                        <form>
                                            <div className="row mb-3">
                                                <label htmlFor="textField" className="col-sm-2 col-form-label"/>
                                                {(this.state.emailDirty && this.state.emailError) && <div style={{color:'red'}}> {this.state.emailError}</div>}
                                                <span>Логин:</span>
                                                <div className="col-sm-13">
                                                    <input className="form-control" id="textField" onChange={element=>this.emailHandler(element)} value={this.email} onBlur={element=>this.blurHandler(element)} name="email" type="text" placeholder="Enter your email..."/>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label htmlFor="password" className="col-sm-2 col-form-label"/>
                                                {(this.state.passwordDirty && this.state.passwordError) && <div style={{color:'red'}}> {this.state.passwordError}</div>}
                                                <span>Пароль:</span>
                                                {/* <p>(P.s: Вы вводите: {password})</p> */}
                                                <div className="col-sm-13">
                                                    <input type="password" className="form-control" id="password" onChange={element=>this.passwordHandler(element)} value={this.password} onBlur={element=>this.blurHandler(element)} name="password" type="password" placeholder="Enter your password..."/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button  href="#entrance" disabled={!(this.state.formValidEmail && this.state.formValidPassword)} type="submit" className="btn btn-primary" onClick={this.handleClick} >
                                        <a style={{color:'white',textDecoration:'none'}} >
                                            Войти
                                        </a>
                                        </button>
                                    </div>
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
                                    {/* <Fragment>
                                            <FormRegistration/>
                                    </Fragment> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Home/>
                </section>
            )
        }
        else{
            return (
                    // sm || ms
                    <div>
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
                                            <a className="nav-link" href="../"  onClick={this.handleClick}>Выход</a> 
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
                        <Kanban/>
                    </div>
                )
            }
    }
}

