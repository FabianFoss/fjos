import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import animal from './animals.json';
import './App.css';
import Landing from './Landing';
import Popup from './Popup.js';

const Dyr = (props) => {
  const {id, name, gender, age, type} = props.dyret
  return(
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{gender}</td>
      <td>{age}</td>
      <td>{type}</td>
      <td><Button onClick={() => props.callback(id)} className = "butt">Slakt</Button></td>
    </tr>
  )
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      animal,
      showPopup: false,
      highestid: 5,
      showLanding: true   
    } 
  }

  componentDidMount () {
    axios.get('localhost:8000/animals/all').then(res => {
      console.log(res)
      this.setState({animal: res.data})

    })
  }


  togglePopup() {  
    this.setState({  
         showPopup: !this.state.showPopup  
    });  
    } 

  toggleLanding() {
    this.setState({
      showLanding: !this.state.showLanding

    });
  }
  
  addAnimal = (newanimal) => {
    const { name, type, gender, age } = newanimal
    const highestid = this.state.highestid
    this.setState({highestid: this.state.highestid + 1})
    console.log("lol")
    this.setState({
      animal: [
        ...this.state.animal, 
        {
          id: highestid +1, 
          name, 
          gender, 
          type, 
          age,
        }
      ]
    });
  }


  onDelete = (id) => {
    console.log(id)
    const newList = this.state.animal.filter(animal => animal.id !== id)
    this.setState({ animal: newList})
  }


  render() {
    console.log(this.state)
    return (
      <div className='landing'>
        {this.state.showLanding ?
        <Landing closeLanding = {this.toggleLanding.bind(this)}/>
        : null
        }
      <div className="App">
        <header className="App-header">
          <h1 className="tittel">Fantasy Fjøs</h1>
          <h2>Become the ultimate fjøs manager!</h2>
          <div className = "Tabell">
          <Table Table striped bordered hover variant="dark">
            <thead className = "table_header">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Type</th>
                <th>Handling</th>
              </tr>
            </thead>
            <tbody className = "tabell">
              {this.state.animal.map(a => <Dyr dyret={a} callback={this.onDelete}/>)} 
            </tbody>
          </Table>
          </div>
          <div>  
              <Button onClick={this.togglePopup.bind(this)} className="butt">Køp nye dyr!</Button>  

              {this.state.showPopup ?  
              <Popup closePopup={this.togglePopup.bind(this)} addanimal={this.addAnimal}/>  
              : null  
              }  
          </div>
        </header>
      </div>
      </div>     
    );
  }
}
export default App;