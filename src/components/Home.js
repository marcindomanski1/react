import React from 'react';
import {Button, Grid, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox} from 'react-bootstrap';

const Home = () => {
    const handleClick = () => {
        alert('click');
    };

    const gridInstance = (
        <Grid>
            <Row className="show-grid">
                <Col xs={12} md={8}> Col 1</Col>
                <Col xs={6} md={4}>Col 2</Col>
            </Row>
        </Grid>
    );

    return (
        <div>
            {gridInstance}
            <Button bsStyle="primary" bsSize="large" onClick={handleClick}>Button</Button>
            <form>
                <FormGroup>
                    <ControlLabel>Label</ControlLabel>
                    <FormControl type="text" placeholder="Type text"/>
                    <HelpBlock>Helpblock</HelpBlock>
                </FormGroup>
                <FormGroup>
                    <Checkbox inline> checkbox</Checkbox>
                </FormGroup>
                <FormGroup>
                    <FormControl componentClass="select" placeholder="Select">
                        <option value="1">select 1</option>
                        <option value="2">select 2</option>
                    </FormControl>
                </FormGroup>
            </form>
        </div>
    );
};

export default Home;