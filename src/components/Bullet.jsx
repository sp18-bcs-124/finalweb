import React from "react";
import d1 from './md1.jpg'
import d2 from './md2.jpg'
import d3 from './md3.jpg'


import {
    Card, CardDeck,Button
   } from 'react-bootstrap';
function Bullet() {
  return (
    <div className="Price">
<h1 style={{textAlign:'center',fontFamily:'monospace',color:'black'}} >Gents Dressing</h1>  
      <div  style = {{marginTop:'20px'}}>
      <CardDeck>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d1} />
  <Card.Body>
    <Card.Title>RS: 25000</Card.Title>
    <Card.Text>
     Prince Coat by colors
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d2} />
  <Card.Body>
    <Card.Title>RS: 20000 </Card.Title>
    <Card.Text>
      Shalwar kameez with Waistcoat by Ricimelion
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d3} />
  <Card.Body>
    <Card.Title>RS: 22000</Card.Title>
    <Card.Text>
    Pent Coat By Edenrobe
    </Card.Text>
  </Card.Body>
</Card>
</CardDeck>
</div>


    </div>
  );
}

export default Bullet;