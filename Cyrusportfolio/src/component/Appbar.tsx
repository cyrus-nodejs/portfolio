



const Appbar = () => {
 

  
  return (
    

 <nav className="navbar navbar-expand-lg  navbar-dark  sticky-top">
<div className="container-fluid">
  <a className="navbar-brand fs-4" href="#">CYRUS</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"   data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div  className="offcanvas   offcanvas-start text-bg-black"  id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
    <div className="offcanvas-header">
      <p className="offcanvas-title fs-4" id="offcanvasDarkNavbarLabel">CYRUS</p>
      <button type="button" className="btn-close btn-close-white " data-bs-dismiss="offcanvas"  aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item">
          <a className="nav-link fs-5 "  aria-current="page" href="#Bio">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-5" target=""  href="#Features">FEATURES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-5" href="#Portfolio">PORTFOLIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-5" href="#Resume">RESUME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-5" href="#Contact">CONTACT</a>
        </li>
        
      </ul>
     
    </div>
  </div>
</div>
</nav> 
  )
}

export default Appbar;