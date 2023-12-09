
import React from 'react';
import Marquee from 'react-fast-marquee';
import { Col, Container, Row } from 'react-bootstrap';
const gradient = {
    background: 'linear-gradient(to right, #7A776B, #11100E) ', 
};

const StudentGallery = () => {
    return (
      

            <Container className='mt-3 bg-light'>
                <h4 className='text-center text-4xl fw-bold'>different college <span className='text-success'>graduate's</span>  group pictures.</h4>
                <Container style={gradient} className='p-4'>


                    <Marquee className='mt-2 text-white' speed={40}>

                        <Row className='p-4'>
                            <Col xs={3}>
                                <img className='w-75' src="https://i.ibb.co/PCKpG8c/dan-gold-4-jh-DO54-BYg-unsplash.jpg" alt="Image 1" />
                            </Col>

                        </Row>
                        <Row className='p-4'>
                            <Col xs={3}>
                                <img className='w-75' src="https://i.ibb.co/9gnsmD2/hermes-rivera-Oz-BLe-Eg1mg-unsplash.jpg" alt="Image 1" />
                            </Col>
                        </Row>
                        <Row className='p-4'>
                            <Col xs={3}>
                                <img className='w-75' src="https://i.ibb.co/9gnsmD2/hermes-rivera-Oz-BLe-Eg1mg-unsplash.jpg" alt="Image 1" />
                            </Col>
                        </Row>
                        <Row className='p-4'>
                            <Col xs={3}>
                                <img className='w-75' src="https://i.ibb.co/9gnsmD2/hermes-rivera-Oz-BLe-Eg1mg-unsplash.jpg" alt="Image 1" />
                            </Col>
                        </Row>
                    </Marquee>

                </Container>
            </Container>
      
    );
};

export default StudentGallery;