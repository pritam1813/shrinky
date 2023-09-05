import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className='border fixed split-nav'>
      <div className='nav-brand'>
        <h3>
          <Link to='/'>Shrinky</Link>
        </h3>
      </div>
      <div className='collapsible'>
        <input id='collapsible1' type='checkbox' name='collapsible1' />
        <label htmlFor='collapsible1'>
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
        </label>
        <div className='collapsible-body'>
          <ul className='inline'>
            <li>
              <Link to='pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='about'>About</Link>
            </li>
            <li>
              <Link to='signup'>Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
