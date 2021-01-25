import React from "react";
import d1 from './s1.jpg'
import d2 from './s2.jpg'
import d3 from './s3.jpg'


import {
    Card, CardDeck,Button
   } from 'react-bootstrap';
function Upper() {
  return (
    <div className="Price">
<h1 style={{textAlign:'center',fontFamily:'monospace',color:'black'}} >Shawls</h1>  
      <div  style = {{marginTop:'20px'}}>
      <CardDeck>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d1} />
  <Card.Body>
    <Card.Title>RS: 3540</Card.Title>
    <Card.Text>
    Cape Shawl YS PX-PX06-W20 Light Grey
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d2} />
  <Card.Body>
    <Card.Title>RS: 2700</Card.Title>
    <Card.Text>
    Shawl HS JS-3F-WLN-3F-W20 Green
    </Card.Text>

  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d3} />
  <Card.Body>
    <Card.Title>RS: 2100</Card.Title>
    <Card.Text>
      White Cape Shawl
    </Card.Text>

  </Card.Body>
</Card>
</CardDeck>
</div>


    </div>
  );
}

export default Upper;