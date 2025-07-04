



const Appbar = () => {
 

  
  return (
    

 <nav className="navbar navbar-expand-lg  navbar-dark  sticky-top">
<div className="container-fluid">
  <a className="navbar-brand fs-4" href="#"></a>
  <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"   data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div  className="offcanvas   offcanvas-start text-bg-black"  id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
    <div className="offcanvas-header">
      <p className="offcanvas-title fs-4" id="offcanvasDarkNavbarLabel"></p>
      <button type="button" className="btn-close btn-close-white " data-bs-dismiss="offcanvas"  aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item">
          <a className="nav-link nav-menu rounded-5 px-3 "  aria-current="page" href="#Bio">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  nav-menu  rounded-5 px-3" target=""  href="#Features">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-menu  rounded-5 px-3 " href="#Portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-menu  rounded-5 px-3" href="#Resume">Resume</a>
        </li>
          <li className="nav-item">
          <a className="nav-link nav-menu rounded-5 px-3" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-menu  rounded-5 px-3 rounded" href="#Contact">Contact</a>
        </li>
        
      </ul>
     
    </div>
  </div>
</div>
</nav> 
  )
}

export default Appbar;