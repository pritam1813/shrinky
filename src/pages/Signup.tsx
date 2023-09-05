function Signup() {
  return (
    <div className='paper sm-10 md-7 lg-4' style={{ margin: "10% auto" }}>
      <div className='row' style={{ justifyContent: "center" }}>
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
        <div
          className='col sm-10 padding-none margin-bottom-small margin-top-small'
          style={{ textAlign: "center" }}
        >
          <input
            type='button'
            className='paper-btn btn-primary-outline'
            value='Sign Up'
          />
        </div>
        <div
          className='col sm-10 padding-none margin-top-small'
          style={{ textAlign: "center" }}
        >
          Already Have An Account ? <a href='#'>Login</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
