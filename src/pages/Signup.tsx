import "../assets/css/signup.css";
import { useDispatch } from "react-redux";
import { SignUpStart } from "../reducers/signupSlice";

function Signup() {
  const dispatch = useDispatch();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(SignUpStart());
  };

  return (
    <div className='paper sm-10 md-7 lg-4 form-container'>
      <div className='row justify-center'>
        <div className='col sm-10 padding-none'>
          <div className='form-group'>
            <label htmlFor='NameLabel'>Name</label>
            <input
              className='input-block'
              placeholder='John Doe'
              type='text'
              id='NameLabel'
            />
          </div>
        </div>
        <div className='col sm-10 padding-none'>
          <div className='form-group'>
            <label htmlFor='EmailLabel'>Email</label>
            <input
              className='input-block'
              placeholder='abc@gmail.com'
              type='text'
              id='EmailLabel'
            />
          </div>
        </div>
        <div className='col sm-10 padding-none'>
          <div className='form-group'>
            <label htmlFor='PasswordLabel'>Password</label>
            <input className='input-block' type='text' id='PasswordLabel' />
          </div>
        </div>
        <div className='col sm-10 padding-none'>
          <div className='form-group'>
            <label htmlFor='ConfirmPasswordLabel'>Confirm Password</label>
            <input
              className='input-block'
              type='text'
              id='ConfirmPasswordLabel'
            />
          </div>
        </div>
        <div className='col sm-10 padding-none margin-bottom-small margin-top-small text-center'>
          <input
            type='button'
            className='paper-btn btn-primary-outline'
            value='Sign Up'
            onClick={handleSubmit}
          />
        </div>
        <div className='col sm-10 padding-none margin-top-small text-center'>
          Already Have An Account ? <a href='#'>Login</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
