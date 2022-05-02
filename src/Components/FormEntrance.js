import React,{useEffect,useState} from 'react';

const Form=()=>{
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  
  const [emailDirty,setEmailDirty]=useState(false);
  const [passwordDirty,setPasswordDirty]=useState(false);

  const [emailError,setEmailError]=useState("Емейл не может быть пустым!");
  const [passwordError,setPasswordError]=useState("Пароль не может быть пустым!");
  const [formValid,setFormValid]=useState(false)
  const [formValidEmail,setFormValidEmail]=useState(false);
  const [formValidPassword,setFormValidPassword]=useState(false);

  useEffect(() => {
    if(formValidEmail==true && formValidPassword==true){
      setFormValid(true); 
    }
    else{
      setFormValid(false); 
    }
  },[formValidEmail,formValidPassword])
  // useEffect(() => {
  //   if(emailError || passwordError ){
  //           setFormValid(false);
  //       }
  //       else{
  //         setFormValid(true);
  //       }
  // }, [emailError,passwordError])


  const emailHandler=(element)=>{
    setEmail(element.target.value);
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(element.target.value).toLowerCase())){
      setEmailError('Неккоретный email');
    }else{
      setEmailError("");
      if(element.target.value=='roma_zverev2002@mail.ru'){
        setFormValidEmail(true);
      }
    }
  }
  const passwordHandler=(element)=>{
    setPassword(element.target.value);
    if (element.target.value.length<5 || (element.target.value.length>10)){
      setPasswordError('Пароль должен быть блинее 5 и меньше 10');
      setFormValidPassword(false);
      if(!element.target.value){
        setFormValidPassword(false);
        setPasswordError('Пароль не может быть пустым')
      }
    }
    else if(element.target.value=='111111'){
      setFormValidPassword(true);
    }
    else{
      setPasswordError('');
      setFormValidPassword(false);
    }
  }
  
  const blurHandler = (element)=>{
    switch(element.target.name){
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
        
    }
  }
  return (
    <section className="form">

      {/* <form>
        <h1>Регистрация</h1>
        {(emailDirty && emailError) && <div style={{color:'red'}}> {emailError}</div>}
        <input onChange={element=>emailHandler(element)} value={email} onBlur={element=>blurHandler(element)} name="email" type="text" placeholder="Enter your email..."></input>
        <p></p>
        {(passwordDirty && passwordError) && <div style={{color:'red'}}> {passwordError}</div>}
        <p></p>
        <input onChange={element=>passwordHandler(element)} value={password} onBlur={element=>blurHandler(element)} name="password" type="password" placeholder="Enter your password..."></input>
        <p></p>
        <button type="submit">Registration</button>
      </form> */}
      
      <div className="modal-body">
        <form action="#">
              <div className="row mb-3">
                  <label htmlFor="textField" className="col-sm-2 col-form-label"/>
                  {(emailDirty && emailError) && <div style={{color:'red'}}> {emailError}</div>}
                  <span>Логин:</span>
                  <div className="col-sm-13">
                      <input className="form-control" id="textField" onChange={element=>emailHandler(element)} value={email} onBlur={element=>blurHandler(element)} name="email" type="text" placeholder="Enter your email..."/>
                  </div>
              </div>
              <div className="row mb-3">
                  <label htmlFor="password" className="col-sm-2 col-form-label"/>
                  {(passwordDirty && passwordError) && <div style={{color:'red'}}> {passwordError}</div>}
                  <span>Пароль:</span>
                  {/* <p>(P.s: Вы вводите: {password})</p> */}
                  <div className="col-sm-13">
                    <input type="password" className="form-control" id="password" onChange={element=>passwordHandler(element)} value={password} onBlur={element=>blurHandler(element)} name="password" type="password" placeholder="Enter your password..."/>
                  </div>
              </div>
          </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button  disabled={!formValid} type="submit" className="btn btn-primary">
          <a style={{color:'white',textDecoration:'none'}} href="todo">
            Войти
          </a>
        </button>
      </div>
      {/* <Routes>
        <Route path="todo/" element={<Todo/>} />
      </Routes> */}
    </section>
  );
};

export default Form;


