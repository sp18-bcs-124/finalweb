import React from "react";
import d1 from './fd1.jpg'
import d2 from './fd2.jpg'
import d3 from './fd3.jpg'


import {
    Card, CardDeck,Button
   } from 'react-bootstrap';
function Pistol() {
  return (
    <div className="Price">
<h1 style={{textAlign:'center',fontFamily:'monospace',color:'black'}} >Fancy Suits</h1>  
      <div  style = {{marginTop:'20px'}}>
      <CardDeck>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d1} />
  <Card.Body>
    <Card.Title>RS: 7000</Card.Title>
    <Card.Text>
    Khadi Unstichted
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d2} />
  <Card.Body>
    <Card.Title>RS: 8000</Card.Title>
    <Card.Text>
    Bonanza Stichted
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d3} />
  <Card.Body>
    <Card.Title>RS: 10000</Card.Title>
    <Card.Text>
   Batiq Luxury Pret
    </Card.Text>
  </Card.Body>
</Card>
</CardDeck>
</div>


    </div>
  );
}

export default Pistol;