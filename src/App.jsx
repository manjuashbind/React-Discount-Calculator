
import './App.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRef, useState } from 'react';




function App() {
  const formRef=useRef(null);
  const[amt,setAmt]=useState(0)
  const[rate,setRate]=useState(0)
  const[damt,setDamt]=useState(0)
  const[pamt,setPamt]=useState(0)
 const discount=(event)=>{
  event.preventDefault();
const discountamt=amt*rate/100;
const amountpay=amt-discountamt;
setDamt(discountamt)
setPamt(amountpay)

 }
 const reset=()=>{
   formRef.current.reset();  
  setDamt(0)
  setPamt(0)
 }

  return (
    <div className="App">
       <Container >
       
      <Row className='mt-xl-5 mt-0 p-3 pt-3 text-center  '>
        <Col xl={5} className='bg-white  p-3 shadow rounded'>
        <Form ref={formRef}>
        <h1 className='text-danger fw-bold mt-2 mb-3 '>Discount Calculator</h1>
       <Form.Group className="mb-3" controlId="formBasicEmail">       
        <Form.Control type="text" onChange={(e)=>setAmt(e.target.value)} placeholder="Enter Amount" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" onChange={(e)=>setRate(e.target.value)} placeholder="Discount %" />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={discount} className='btn btn-danger fw-medium '>  Calculate  </Button>
    </Form>
     
        </Col>
        </Row>
          <Row className='mt-0 mt-xl-3 text-center  p-3  '>
            <Col  xl={5} className='bg-white p-3 text-primary  shadow rounded  ' >
            <h3>You are Saving </h3>
            <h3 className='text-danger fw-bold'>&#8377; {damt} /-</h3>
            <h3>Amount You Pay</h3>
            <h3 className='text-danger fw-bold'> &#8377; {pamt} /-</h3>
            <Button variant="primary" type="submit" onClick={reset} className='btn btn-warning fw-medium mt-3'>  Reset  </Button>
            </Col>
        </Row>
    </Container>
     

     
    </div>
  );
}

export default App;
