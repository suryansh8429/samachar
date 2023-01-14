import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            Samachar
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            aria-controls='navbarSupportedContent'
            aria-expanded='true'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar mb-2'>
              <li className='nav-item'>
                <Link className='nav-link' aria-current='page' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/business'>
                  Business
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/entertainment'>
                  Entertainment
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/health'>
                  Health
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/science'>
                  Science
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/sports'>
                  Sports
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/technology'>
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
