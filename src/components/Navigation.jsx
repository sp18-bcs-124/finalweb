import React from "react"
import {Link, withRouter} from "react-router-dom" 
import {Nav,Navbar,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'



function Navigation(props){

return(
    <div>
  <Navbar style={{ marginTop: '-7px'}} expand="lg">
 <Navbar.Brand href="#home" >AL-IMRAN CLOTHING STORE  </Navbar.Brand>
 <Navbar.Toggle aria-controls="basic-navbar-nav" />
 <Navbar.Collapse id="basic-navbar-nav">


   <ul>
   <Nav className="mr-auto">
     <li style={{paddingTop:'23px'}} class={`nav-item  ${
                 props.location.pathname === "/" ? "active" : ""
               }`}>
      <Link style={{paddingLeft:'400px'}}Link class="nav-link" to='/'>Home <span class="sr-only">(current)</span> </Link>  </li>

 <li style={{paddingLeft:'15px',paddingTop:'23px'}}>   <NavDropdown title="Categories" id="basic-nav-dropdown">
       <NavDropdown.Item href="#action/3.1"  class={`nav-item  ${
                 props.location.pathname === "/rifle" ? "active" : ""
               }`}><Link class="nav-link" to='/rifle'>Casual</Link></NavDropdown.Item>
      
       <NavDropdown.Item href="#action/3.2"  class={`nav-item  ${
                 props.location.pathname === "/pistol" ? "active" : ""
               }`}><Link class="nav-link" to='/pistol'>Fancy</Link></NavDropdown.Item>
       <NavDropdown.Item href="#action/3.3" class={`nav-item  ${
                 props.location.pathname === "/shotgun" ? "active" : ""
               }`}><Link class="nav-link" to='/shotgun'>Bridal</Link></NavDropdown.Item>
       <NavDropdown.Item href="#action/3.4"  class={`nav-item  ${
                 props.location.pathname === "/bullet" ? "active" : ""
               }`}><Link class="nav-link" to='/bullet'>Gents</Link></NavDropdown.Item>
       <NavDropdown.Divider />
     </NavDropdown>
     </li>
  <li style={{paddingLeft:'15px',paddingTop:'23px'}}>  <NavDropdown title="Ready-to-wear" id="basic-nav-dropdown2">
       <NavDropdown.Item href="#action/3.5" class={`nav-item  ${
                 props.location.pathname === "/lower" ? "active" : ""
               }`}><Link class="nav-link" to='/lower'>Kurta</Link></NavDropdown.Item>
       <NavDropdown.Item href="#action/3.6" class={`nav-item  ${
                 props.location.pathname === "/upper" ? "active" : ""
               }`}><Link class="nav-link" to='/upper'>Shawls</Link></NavDropdown.Item>
       <NavDropdown.Item href="#action/3.7" class={`nav-item  ${
                 props.location.pathname === "/black" ? "active" : ""
               }`}><Link class="nav-link" to='/black'>Trousers</Link></NavDropdown.Item>
       
       <NavDropdown.Divider />
     </NavDropdown>
     </li>

    <li style={{paddingLeft:'15px',paddingTop:'23px'}}> <NavDropdown title="Contact Us" id="basic-nav-dropdown3">
       <NavDropdown.Item href="#action/3.8">Whatsapp: 0312-9979347</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.9">Email: shaheeraoun78@gmail.com</NavDropdown.Item>
      
       
       <NavDropdown.Divider />
     </NavDropdown>
     </li>

     <li style={{paddingLeft:'15px',paddingTop:'30px', color:'gray'}}><Link to="/shop" style={{color:'gray'}}>Online Store</Link></li>
     <li style={{paddingLeft:'15px',paddingTop:'30px', color:'gray'}}><Link to="/cart"  style={{color:'gray'}}>cart</Link></li>
   </Nav>
   </ul>
  
   
  
 </Navbar.Collapse>
</Navbar>
</div>
);
}

export default withRouter(Navigation);