import React from 'react';
import animals from './animals.json';
import './App.css';
import {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'

function Farm () {

    const [allAnimals, setAnimalList] = useState([])
    const [show, setShow] = useState(false)
    //const [newAnimal, updateAnimal] = useState({})

    const [globalId, updateId] = useState(6)


    let myObject = {}
    myObject.name = "abc"

    const animalTypes = ['Gris', 'Høne', 'Ku', 'Kylling', 'Katt', 'Grusegutt']

    const animal = {
        "id": globalId,
        "name": "",
        "gender": "M",
        "age": 30,
        "type": ""
    }
    
    const handleShow = () => setShow(!show)

    useEffect (() => {
        console.log('useffect')
        setAnimalList(animals.map(animal => {
            return animal
            }))
        }, [])

    const addAminal = () => {
        setAnimalList([...allAnimals, animal])
        handleShow()
        updateId(globalId + 1)
    }

    const handleChange = (e) => {
        animal[e.target.name] = e.target.value
        console.log(e.target.value)
    }

    const onDelete = (e) => {
        const newList = allAnimals.filter(animal => animal.id !== parseInt(e.target.id))
        setAnimalList(newList)
        //updateId(globalId - 1)
    }

    return (
        <div>
        <h1>Fjos 2.0</h1>
        <div className="align_center">
            <Button className="button_style" onClick={handleShow}>Add animal</Button>
        </div>
        <div className="table_container">
        <Table Table striped bordered hover variant="dark">
            <thead className="table_header">
            {animalTypes.map(type => {return <td>{type}</td>})}
            </thead>
            <tbody>
                {allAnimals.map(animal => {
                    return <tr>
                        <td>#{animal.id}</td>
                        <td>{animal.name}</td>
                        <td>{animal.type}</td>
                        <td>{animal.age}</td>
                        <td>{animal.gender}</td>
                        <td><Button onClick={onDelete} id={animal.id}>Delete</Button></td>
                    </tr>
                })}
            </tbody>
        </Table> 
        </div>

        {/*Add animal modal*/}
        <Modal show={show} onHide={handleShow}>
            {/*<Modal.Dialog className="full_width">
                <Modal.Header closeButton>
                    <Modal.Title>Legg til nytt dyr</Modal.Title>
            </Modal.Header>*/}

                <Modal.Body>
                    <Modal.Title>Legg til nytt dyr</Modal.Title>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                name="name" 
                                type="name" 
                                placeholder="Saun the Sheap" 
                                onChange={handleChange}
                                />
                        </Form.Group>
                        
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Age</Form.Label>
                            <Form.Control name="age" type="number"/>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Type</Form.Label>
                                <Form.Control 
                                    as="select"
                                    onChange={handleChange}
                                    name="type">
                                    <option>Gris</option>
                                    <option>Ku</option>
                                    <option>Antilope</option>
                                    <option>Kylling</option>
                                    <option>Høne</option>
                                    <option>Grisegutt</option>
                                </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Gender</Form.Label>
                                <Form.Control 
                                    as="select" 
                                    onChange={handleChange}
                                    name="gender">
                                    <option>Male</option>
                                    <option>Female</option>
                                </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleShow}>Lukk</Button>
                    <Button variant="primary" onClick={addAminal}>Legg til</Button>
                </Modal.Footer>
            {/*</Modal.Dialog>*/}
        </Modal>
</div>
    );

}


export default Farm

