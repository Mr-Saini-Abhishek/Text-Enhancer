import React from 'react'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.dark} bg-${props.dark}`} style={{color: props.mode === 'dark'?'white':'white'}}>
    <a className="navbar-brand mx-2" href="/" style={{color: props.mode === 'dark'?'white':'white'}}>Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-a mx-2" href="/" style={{color: props.mode === 'dark'?'white':'white'}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-a mx-2" href="/about" style={{color: props.mode === 'dark'?'white':'white'}}>AboutUs</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-a mx-2" href="/" style={{color: props.mode === 'dark'?'white':'white'}}>Services</a>
        </li>
      </ul>
      
    </div>
    <div className={`form-check form-switch mx-2 ${props.mode === 'light'?'dark':'light'}`}>
<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toogleMode}/>
<label className="form-check-label" htmlfor="flexSwitchCheckDefault">DARK MODE</label>
</div>
  </nav>
  )
}
