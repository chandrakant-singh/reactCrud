import React,{useRef,useState} from 'react';
import { NavLink } from 'react-router-dom';

const SignUpComponent = () => {

  const [signUpInfo,setSignUpInfo] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const signUpClickHandler = () => {
    if(validateForm()) {
      console.log('Sign Up Details :',signUpInfo);
    } else {
      console.error('All fields are mandatory :',signUpInfo);
    }
  }

  const onChangeHandler = (e) => {
    e.preventDefault();
    const targetInputField = e.target; 
    setSignUpInfo((prevState) => ({...prevState,[targetInputField.name]: targetInputField.value}))
  }

  const validateForm = () => {
    return (
      signUpInfo.userName.length > 0 &&
      signUpInfo.email.length > 0 &&
      signUpInfo.password.length > 0 &&
      signUpInfo.password === signUpInfo.confirmPassword
    );
  }


  return (
    <>
      <div className='container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto'>
        <div className='card card0 border-0'>
          <div className='row d-flex'>
            <div className='col-lg-6'>
              <div className='card1 pb-5'>
                <div className='row'>
                  
                  <img
                    src='https://i.imgur.com/CXQmsmF.png'
                    className='logo'
                    alt='bannerImage'
                  />
                </div>
                <div className='row px-3 justify-content-center mt-4 mb-5 border-line'>
                  
                  <img
                    src='https://i.imgur.com/uNGdWHi.png'
                    className='image'
                    alt='bannerImage'
                  />
                </div>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='card2 card border-0 px-4 py-5'>
                <div className='row mb-4 px-3'>
                  <h6 className='mb-0 mr-4 mt-2'>Sign in with</h6>
                  <div className='facebook text-center mr-3'>
                    <div className='fa fa-facebook'></div>
                  </div>
                  <div className='twitter text-center mr-3'>
                    <div className='fa fa-twitter'></div>
                  </div>
                  <div class='linkedin text-center mr-3'>
                    <div class='fa fa-linkedin'></div>
                  </div>
                </div>
                <div className='row px-3 mb-4'>
                  <div className='line'> </div>
                  <small className='or text-center'>Or</small>
                  <div className='line'></div>
                </div>
                <div className='row px-3'>
                  
                  <label className='mb-1'>
                    <h6 className='mb-0 text-sm'>Name</h6>
                  </label>
                  <input
                    className='mb-4'
                    type='text'
                    name='userName'
                    placeholder='Enter a valid Username'
                    onChange={onChangeHandler}
                  />
                </div>
                {/* <div className='row px-3'>
                  
                  <label className='mb-1'>
                    <h6 className='mb-0 text-sm'>Username</h6>
                  </label>
                  <input
                    className='mb-4'
                    type='text'
                    name='email'
                    placeholder='Enter a valid email address'
                  />
                </div> */}
                <div className='row px-3'>
                  <label className='mb-1'>
                    <h6 className='mb-0 text-sm'>Email Address</h6>
                  </label>
                  <input
                    className='mb-4'
                    type='email'
                    name='email'
                    placeholder='Enter a valid email address'
                    onChange={onChangeHandler}
                  />
                </div>
                <div className='row px-3'>
                  
                  <label className='mb-1'>
                    <h6 className='mb-0 text-sm'>Password</h6>
                  </label>
                  <input
                    className='mb-4'
                    type='password'
                    name='password'
                    placeholder='Enter password'
                    onChange={onChangeHandler}
                  />
                </div>
                <div className='row px-3'>
                  
                  <label className='mb-1'>
                    <h6 className='mb-0 text-sm'>Confirm Password</h6>
                  </label>
                  <input
                    type='password'
                    name='confirmPassword'
                    placeholder='Enter password'
                    onChange={onChangeHandler}
                  />
                </div>
                <div className='row px-3 mb-4'>
                  <div className='custom-control custom-checkbox custom-control-inline'>
                    
                    <input
                      id='chk1'
                      type='checkbox'
                      name='chk'
                      className='custom-control-input'
                    />
                    <label
                      htmlFor='chk1'
                      className='custom-control-label text-sm'
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div className='row mb-3 px-3'>
                  
                  <button
                    type='button'
                    className='btn btn-blue btn-primary text-center'
                    onClick={signUpClickHandler}
                  >
                    SignUp
                  </button>
                </div>
                <div className='row mb-4 px-3'>
                  
                  <small className='font-weight-bold'>
                    Already have an account?
                    <NavLink to='/auth/sign-in' activeClassName='selected'>
                      SignIn
                    </NavLink>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpComponent;
