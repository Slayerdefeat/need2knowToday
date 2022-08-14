import React from 'react'
import {NavLink} from 'react-router-dom'
function Nav(props) {
  return (
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" >Need2KnowToday</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        {
          props.categ.map((ele)=>{
            return (
              <li className="nav-item cursor-pointer" key={ele}>
                {/* {console.log(ele)} */}
              <a className="nav-link active" style={{cursor:"pointer"}}  aria-current="page" name={ele} onClick={(e)=>props.val(e.target.name)} >{ele.charAt(0).toUpperCase() + ele.slice(1,).toLowerCase()}</a>
            </li>
            )
          })
        }
      
        {/* <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/world">World</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/national">National</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/hatke">Unique</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/business">Business</NavLink>
        </li>
   
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/sports">Sports</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/politics">Politics</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/technology">Technology</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/startup">Startup</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/entertainment">Entertainment</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/miscellaneous">Miscellaneous</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/science">Science</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/automobile">Automobile</NavLink>
        </li> */}
      </ul>

      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={()=>{props.moding()}} />
  <label className={`form-check-label text-${props.mode==="light"?"dark":"light"}`} htmlFor="flexSwitchCheckChecked">{props.mode.charAt(0).toUpperCase() + props.mode.slice(1,).toLowerCase()} mode</label>
</div>
     
    </div>
  </div>
</nav>
  )
}

export default Nav