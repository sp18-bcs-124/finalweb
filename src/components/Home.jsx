import React from "react"
import './App.css';
import {Carousel} from 'react-bootstrap'
import rif from './c1.jpg'
import sig from './c2.jpg'
import fel from './c3.jpg'
import {
 Card, CardDeck
} from 'react-bootstrap';
import d1 from './ml1.jpg'
import d2 from './ml2.jpg'
import d3 from './ml3.jpg'
import d5 from './ml4.jpg'
import d6 from './ml5.jpg'
import d10 from './ml6.jpg'
import bodyp from './gul.jpg'
import first from './jj.jpg'


function Home(props){

return(
    <div className="Home" >
    <div>
    <Carousel>
      <Carousel.Item>
      <a href ="" ><img
        height = "400px"
          className="d-block w-100"
          src= {rif}
          alt="First slide"
        /></a>
        <Carousel.Caption>
          <h3>New Arrival</h3>
          <p><a style = {{color:'white'}} href ="" >Maria B silk</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a href ="" ><img
        height = "400px"
          className="d-block w-100"
          src={sig}
          alt="Third slide"
        /></a>
    
        <Carousel.Caption>
          <h3>New Arrival</h3>
          <p><a style = {{color:'white'}} href ="" >Maria B Eid collection</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a href ="" ><img
        height = "400px"
          className="d-block w-100"
          src={fel}
          alt="Third slide"
        /></a>
    
        <Carousel.Caption>
          <h3>New Arrival</h3>
          <p><a style = {{color:'white'}} href ="" >Maria B voyage</a></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>



<h3 style={{color:'pink',fontSize:'40px',fontFamily:'cursive',margin:'0',padding:'0',textAlign:'center' }}>On Sale!</h3>
      


 <div style = {{marginTop:'20px'}}>
 <CardDeck>
  <Card>
  <a href ="" ><Card.Img variant="top" src={d1} /></a>
    <Card.Body>
    <a style={{color:'black'}} href ="" ><Card.Title>Mariab linen D-1331</Card.Title></a>
      <Card.Text>
      
        NOW Rs 6690/- 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Offer Expires on Sunday!</small>
    </Card.Footer>
  </Card>
  <Card>
  <a href ="" >    <Card.Img variant="top" src={d2} /></a>
  
    <Card.Body>
    <a style={{color:'black'}} href ="" ><Card.Title>KHUDABAKSH Z-219</Card.Title></a>
      <Card.Text>
        Now Rs 10990/-
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Offer expires on Sunday</small>
    </Card.Footer>
  </Card>
  <Card >
  <a href ="" ><Card.Img variant="top" src={d3} /></a>
    <Card.Body>
    <a style={{color:'black'}} href ="" ><Card.Title>ALLYS 3062</Card.Title></a>
      <Card.Text>
       Now Rs 7490/- 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Offer expires on Sunday</small>
    </Card.Footer>
  </Card>
</CardDeck>

 </div>
    
 <div style = {{marginTop:'20px', paddingleft:'5px' }}>
 <CardDeck>
  <Card>
  <a href ="" ><Card.Img variant="top" src={d5}/></a>
    <Card.Body>
    <a style={{color:'black'}} href ="" ><Card.Title> Arfa Riwaj 1221</Card.Title></a>
      <Card.Text>
    Now Rs 4990/-
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Offer expires on Sunday</small>
    </Card.Footer>
  </Card>
  <Card>
  <a href ="" >   <Card.Img variant="top" src={d6} /></a>
    <Card.Body>
    <a style={{color:'black'}} href ="" ><Card.Title>MAXI 02</Card.Title></a>
      <Card.Text>
       Now Rs 14590/-{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Offer expires on Sunday</small>
    </Card.Footer>
  </Card>
  <Card>
  <a href ="" ><Card.Img variant="top" src={d10} /></a>
    <Card.Body>
    <a style={{color:'black'}} href ="" ><Card.Title>Stylish Suit Mens</Card.Title></a>
      <Card.Text>
        Now Rs 4790/-
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Offer expires on Sunday</small>
    </Card.Footer>
  </Card>
</CardDeck>
 </div>
 
<h3  style={{color:'pink',fontSize:'40px',fontFamily:'cursive',margin:'0',padding:'0',textAlign:'center',paddingTop:'15px',paddingBottom:'8px' }} >Hot Offers</h3>
<div >
<div style ={{paddingtop:'5px',width:'50%',float:'left',paddingLeft:'11px'}}>
<a href ="" ><img  src = {bodyp} style ={{width:'100%',height:'500px'}} /></a>
<p style = {{border:'pink solid 2px', borderWidth:'8px',backgroundColor:'pink',color:'red',textAlign:'center',fontSize:'20px',fontFamily:'cursive'}}><a style={{color:'black'}} href ="" >Gull Ahmad Flat 50% off</a></p>
  </div>


  <div style ={{paddingtop:'5px',width:'48%',float:'right'}}>
  <a href ="" ><img  src = {first} style ={{width:'100%',height:'500px'}} /></a>
<p style = {{border:'pink solid 2px', borderWidth:'8px',backgroundColor:'pink',color:'red',textAlign:'center',fontSize:'20px',fontFamily:'cursive'}}><a style={{color:'black'}} href =" ">J. Upto 50% Off</a></p>
  </div>
  

  </div>
  <div style={{position:'absolute',left:'55%',top:'425%',marginTop:'80px',width:'45%',backgroundColor:'gray'}} >
<h3><strong>Address</strong></h3>
<h4 >Main Bazar G.T. Road Kharian</h4>
</div>

<div style={{width:'33%',borderRight:'2px solid black',backgroundColor:'gray',position:'absolute',left:'0%',top:'425%',marginTop:'80px'}} >
<h3><strong>Brand Partner</strong></h3>
<h4 style={{color:'Maroon'}} >Maria B</h4>
<h4 style={{color:'Maroon'}} >Junaid Jamshaid</h4>
<h4 style={{color:'Maroon'}} >Gull Ahmad</h4>
<h4 style={{color:'Maroon'}} >Akbar Aslam</h4>
<h4 style={{color:'Maroon'}} >RIVAJ</h4>
<h4 style={{color:'Maroon'}} >Bonanza</h4>
<h4 style={{color:'Maroon'}} >Khaadi</h4>
</div>

<div style={{position:'absolute',backgroundColor:'gray',width:'20%',left:'34%',top:'425%',marginTop:'80px',borderRight:'2px solid black'}} >
<h3><strong>Follow Us</strong></h3>
<h4 ><a href =""v style={{color:'Maroon'}} >FaceBook</a></h4>
<h4  ><a href =""  style={{color:'Maroon'}}>Instagram</a></h4>
</div>
</div>
);
}

export default Home;