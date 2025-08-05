

import { Button } from 'react-bootstrap';
import { useTheme } from "../context/themecontext";



const Appbar   = () => {
  const { theme, toggleTheme} = useTheme();

  return (
    
 <nav
      className={`navbar navbar-expand-lg sticky-top ${
        theme === 'dark' ? 'dark ' : 'light '
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand fs-4" href="#"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon `}></span>
        </button>
        <div
          className={`offcanvas offcanvas-start ${
            theme ? 'text-bg-dark' : 'text-bg-light'
          }`}
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <p className="offcanvas-title fs-4" id="offcanvasNavbarLabel"></p>
            <button
              type="button"
              className={`btn-close ${theme ? 'btn-close-white' : ''}`}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link nav-menu rounded-5 px-3" href="#Bio">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-menu rounded-5 px-3" href="#Features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-menu rounded-5 px-3" href="#Portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-menu rounded-5 px-3" href="#Resume">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-menu rounded-5 px-3" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-menu rounded-5 px-3" href="#Contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <Button
                  className="nav-link nav-menu darkmode  rounded-5 px-3"
                  onClick={toggleTheme}
                  variant={theme === 'light' ? 'light' : 'dark'}
                >
                 {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Appbar;