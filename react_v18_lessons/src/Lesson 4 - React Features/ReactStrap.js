
// npm install reactstrap react react-dom //
// npm install --save bootstrap //
import React from 'react';
import {Container , Row , Col} from 'reactstrap';

////////////////////////////////// Bootstrap & Reactstrap ////////////////////////////////////////////////
function UsageOfReactstrap(){
    return (
        <div>
            <div className="exampleHeader">Bootstrap & Reactstrap</div>
            <div className="container">
                <div>Bootstrap Container</div>
                <div className="row">
                    <div className="border col-lg-3">Col-lg-3</div>
                    <div className="border col-lg-5">Col-lg-5</div>
                    <div className="border col-lg-4">Col-lg-4</div>
                </div>
            </div>
            <br/>
            <br/>
            <Container>
                <div>Reactstrap Container</div>
                <Row>
                    <Col className="border" xs="1" lg="2">Col-lg-2</Col>
                    <Col className="border" xs="1" lg="9">Col-lg-9</Col>
                    <Col className="border" xs="1" lg="1">Col-lg-1</Col>
                </Row>
            </Container>
        </div>
    )
}

export {
    UsageOfReactstrap
}