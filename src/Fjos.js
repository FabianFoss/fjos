import React from 'react';
import animals from './animals.json';
import './App.css';
import {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Farm () {
    const [allAnimals, setAnimalList] = useState([])
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show)

    useEffect (() => {
        setAnimalList(animals.map(animal => {
            return animal
            }))
        })

    
    return (
        <div>
        <h1>Fjos 2.0</h1>
        <Table>
            <thead>Animals</thead>
                <td>Name</td>
                <td>Id</td>
                <td>Type</td>
            <tbody>
                {allAnimals.map(animal => {
                    return <tr>
                        <td>{animal.name}</td>
                        <td>{animal.id}</td>
                        <td>{animal.type}</td>
                    </tr>
                })}
            </tbody>
        </Table> 
        
        <Button onClick={handleShow}>Add animal</Button>

        {/*Add animal modal*/}
        <Modal show={show} onHide={handleShow}>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleShow}>Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
</div>
    );

}


export default Farm

