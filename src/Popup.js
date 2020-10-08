import React from 'react';  
import './App.css'; 
import Button from 'react-bootstrap/Button';


class Popup extends React.Component {  
    constructor(props) {
        super(props);

        this.state = {
            name:"",
            type:"",
            gender:"",
            age:"",

        }

    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('1')
        this.props.addanimal(this.state)
        this.setState({
            name:"",
            type:"",
            gender:"",
            age:"",
        })

    }
    
    fillgenderm = (e) => {
        e.preventDefault()
        this.setState({
            gender: "M"
        })

    }
    
    fillgenderf = (e) => {
        e.preventDefault()
        this.setState ({
            gender:"F"
        })

    }

    /* handleChange for alle input bokser*/
    handleInputChangename = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    handleInputChangetype = (e) => {
        this.setState({
            type: e.target.value,
        })
    }

    // handleInputChangegender = (e) => {
    //     this.setState({
    //         gender: e.target.value,
    //     })
    // }

    handleInputChangeage = (e) => {
        this.setState({
            age: e.target.value,
        })
    }


    /*Popup Div*/
    render() {  
    return (  
        <div className='popup'>  
            <div className='popup\_inner'>   
                <Button onClick={this.props.closePopup} className = "butt">Lukk</Button> 
                <div className='popup_scheme'>
                    <h2 className='skjemaover'>Ditt nye dyr</h2>
                    <form className='skjemaet'>
                        <ul>
                        <label className='inputboks'>
                            <input  
                                type="text" 
                                name="navn"
                                className='inputbok' 
                                placeholder='Navn'
                                onChange={this.handleInputChangename}
                                value={this.state.name} 
                                />
                        </label>
                        </ul>

                        <ul>
                        <label className='inputboks'>
                            <input  
                                type="text" 
                                name="type" 
                                placeholder='Type' 
                                className='inputbok'
                                onChange={this.handleInputChangetype}
                                value={this.state.type} 
                                />
                        </label>
                        </ul>
                        <ul>
                        <label className='inputboks'>
                            <input  
                                type="number" 
                                name="age" 
                                placeholder='Alder' 
                                className='inputbok'
                                onChange={this.handleInputChangeage}
                                value={this.state.age} 
                                />
                        </label>
                        </ul>

                        <ul className="genderchoice">
                            <input  
                                type="none" 
                                name="gender" 
                                placeholder='Kjønn' 
                                className='inputbok1'
                                onChange={this.handleInputChangegender}
                                value={this.state.gender}/>
                            <Button className="valgF" onClick={this.fillgenderf}>F</Button>
                            <Button className="valg" onClick={this.fillgenderm}>M</Button>
                        </ul>
                        
                        <Button 
                            className='kjopeknapp' 
                            type='submit'
                            onClick={this.handleSubmit}
                            >   
                            Kjøp
                        </Button>
                    </form>
                </div>
            </div>  
        </div>  
        );  
    }  
}  

export default Popup;