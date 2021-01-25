import React from "react";
import d1 from './t1.jpg'
import d2 from './t2.jpg'
import d3 from './t3.jpg'


import {
    Card, CardDeck,Button
   } from 'react-bootstrap';
function Black() {
  return (
    <div className="Price">
<h1 style={{textAlign:'center',fontFamily:'monospace',color:'black'}} >Trousers</h1>  
      <div  style = {{marginTop:'20px'}}>
      <CardDeck>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d1} />
  <Card.Body>
    <Card.Title>RS: 1950</Card.Title>
    <Card.Text>
      Khadi Trouser
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d2} />
  <Card.Body>
    <Card.Title>RS: 2150</Card.Title>
    <Card.Text>
      Embroided Trouser
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d3} />
  <Card.Body>
    <Card.Title>RS: 3540</Card.Title>
    <Card.Text>
      Zara Trouser
    </Card.Text>
  </Card.Body>
</Card>
</CardDeck>
</div>


    </div>
  );
}

export default Black;