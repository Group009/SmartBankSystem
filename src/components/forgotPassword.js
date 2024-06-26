import { Paper, Typography } from '@mui/material';
import { Container, Col, Row } from 'react-bootstrap';
import { BsBank2 } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from '../assets/img.png'
import TextField from '@mui/material/TextField';
import "./Login.css"
import { Link } from 'react-router-dom';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import "./forgot.css"

function ForgotPassword() {

    const [Question, setQuestion] = useState('');

    const handleChange = (event) => {
        setQuestion(event.target.value);
    };


    return (
        <div style={{ backgroundColor: "white" }}>
            <Container fluid style={{ backgroundColor: "#01065D", boxShadow: "10px 10px 100px white" }}>
                <Row>
                    <Col lg={6} >
                        <BsBank2 size="30" color='white' style={{ marginTop: "10px", marginBottom: "8px" }} />
                    </Col>
                    <Col lg={6} style={{ textAlign: "right", marginTop: "12px", marginBottom: "12px" }}>
                        <h5 style={{ color: "white", fontFamily: 'Lobster', }}>Staff Corner</h5>
                    </Col>
                </Row>
            </Container>
            <Container style={{ margin: "2%" }}   >
                <Row>
                    <Col lg={4}>

                    </Col>

                    <Col lg={6} style={{ border: "1px solid #020431", boxShadow: "10px 10px 5px grey", borderRadius: "5%", padding: "2%", marginTop: "50" }}>

                        <Form>
                            <br />

                            <h3 style={{ color: "#01065D", textAlign: "center", fontFamily: "DynaPuff", textShadow: "10px 10px 100px blue" }}>Forgot Password</h3>
                            <br />
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <TextField id="outlined-basic" label="Enter User Name" variant="outlined" className='form-control' />

                            </Form.Group>

                            <Form.Group >
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Security Questions</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={Question}
                                            label="Age"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>Name Of Primary School</MenuItem>
                                            <MenuItem value={20}>Name Of Best Friend Name</MenuItem>
                                            <MenuItem value={30}>Name of Born Location</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Form.Group>
                            <br />


                            <Form.Group className="mb-3" controlId="formBasicPassword">

                                <TextField id="outlined-basic" style={{ borderRadius: "40%" }} label="Enter Answer" variant="outlined" className='form-control' />
                            </Form.Group>



                            <Button style={{ backgroundColor: "#040B87", height: "50px" }} type="submit" className='form-control'>
                              <Link to={"/UpdatePassword"} style={{textDecoration:"none",color:"white"}}>
                                Get Details
                              </Link>
                            </Button>
                            <br />


                            <br />
                            <Row>
                                <Col lg={6}>
                                    {/* <h5 style={{ color: "black", textAlign: "left", fontSize: "13px", fontFamily: "DynaPuff", textShadow: "10px 10px 100px blue" }}>Forgot Password</h5> */}

                                </Col>
                                <Col lg={6}>
                                    <h5 style={{ color: "black", textAlign: "right", fontSize: "13px", fontFamily: "DynaPuff", textShadow: "10px 10px 100px blue" }}>
                                        Already Has An  Account ?  <Link to={"/"}>
                                            Login
                                        </Link>
                                    </h5>
                                    <br />

                                </Col>
                            </Row>



                        </Form>


                    </Col>
                    <Col lg={2}>

                    </Col>
                </Row>
            </Container>
            <Container className='footer' fluid style={{
                backgroundColor: "#01065D", boxShadow: "10px 10px 100px grey",

            }}>
                <Row>

                    <Col lg={12} style={{ textAlign: "center", }}>
                        <h5 style={{ color: "white", fontFamily: 'Lobster', }}>All right resereved@Group9</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ForgotPassword
