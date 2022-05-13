import React from 'react';

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }

  if (!input.password) {
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
  }
  return errors;
};



export default function  Form() {

  const [stateInputs, setStateInputs] = React.useState({
    username: '',
    password: ''
  })

  const [errors, setErrors] = React.useState({});

  const handleInputChange = (e) => {
    setStateInputs({
      ...stateInputs, //copia la información que ya tenia
      [e.target.name] : e.target.value
    })
    
        setErrors(validate({
        ...stateInputs,
        [e.target.name]: e.target.value
        }));
  }


  
  const handleSubmit = (e) =>{
    e.preventDefault();
    if (errors.name) return alert("Hay errores e el formulario")
    alert('Se envió información')
  }

  return (
      <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input className={errors.username && 'danger'}
            type="text" 
            name="username" 
            onChange={(e) => handleInputChange(e) } 
            value={stateInputs.username}
            />
            {errors.username && (
                 <p className="danger">{errors.username}</p>
            )}
          </div>
          <div>
            <label>Password:</label>
            <input 
            type="password" 
            name="password"
            onChange={(e) => handleInputChange(e)}  
            value={stateInputs.password}
            />
            {errors.username && (
                <p className="danger">{errors.password}</p>
            )}
          </div>
          <div>
            <input type= "submit" name="Submit" />
          </div>
      </form>
  )
}
