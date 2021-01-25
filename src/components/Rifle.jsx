import React from "react";
import d1 from './cd1.jpg'
import d2 from './cd2.jpg'
import d3 from './cd3.jpg'


import {
    Card, CardDeck,Button
   } from 'react-bootstrap';
function Rifle() {
  return (
    <div className="Price">
<h1 style={{textAlign:'center',fontFamily:'monospace',color:'black'}} >Casual Dressing</h1>  
      <div  style = {{marginTop:'20px'}}>
      <CardDeck>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d1} />
  <Card.Body>
    <Card.Title>RS: 2500</Card.Title>
    <Card.Text>
   Maria B Casual suit
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d2} />
  <Card.Body>
    <Card.Title>RS: 3000</Card.Title>
    <Card.Text>
    Maria B Casual suit
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d3} />
  <Card.Body>
    <Card.Title>RS: 3500</Card.Title>
    <Card.Text>
    Maria B Casual suit
    </Card.Text>
  </Card.Body>
</Card>
</CardDeck>
</div>


    </div>
  );
}

export default Rifle;