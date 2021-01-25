import React from "react";
import d1 from './bd1.jpg'
import d2 from './bd2.jpg'
import d3 from './bd3.jpeg'


import {
    Card, CardDeck,Button
   } from 'react-bootstrap';
function Shotgun() {
  return (
    <div className="Price">
<h1 style={{textAlign:'center',fontFamily:'monospace',color:'black'}} >Bridal Wear</h1>  
      <div  style = {{marginTop:'20px'}}>
      <CardDeck>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d1} />
  <Card.Body>
    <Card.Title>RS: 250000</Card.Title>
    <Card.Text>
      Maria B bridal Dress
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d2} />
  <Card.Body>
    <Card.Title>RS: 100000</Card.Title>
    <Card.Text>
      Kashee's Bridal Dress
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d3} />
  <Card.Body>
    <Card.Title>RS:100000</Card.Title>
    <Card.Text>
      Nameera By Farooq
    </Card.Text>
  </Card.Body>
</Card>
</CardDeck>
</div>


    </div>
  );
}

export default Shotgun;