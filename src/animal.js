import React from 'react';
import App from './App'
import animal from './animals.json';
import { statement } from '@babel/template';

class Popup extends React.Component {  
    render() {  
        return (  
        <div className='popup'>  
            <div className='popup\_inner'>  
                <h1>{this.props.text}</h1>  
                <button onClick={this.props.closePopup}>close me</button>  
            </div>  
        </div>  
        );  
    }  
}  
 
const Pupop = props => {
    return(
        <div className='popup'>  
            <div className='popup\_inner'>  
                <h1>{this.props.text}</h1>  
                <button onClick={this.props.closePopup}>close me</button>  
            </div>  
        </div>

    )

}



/*const CreateAnimal = (props) => {
  const {id} = props.dyret
  return(
    <tr>
      <td>{id + 1}</td>     
      <td>
      <form><label>Name: <input onChange = {console.log}></input></label></form>
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><Button>Kjøp</Button></td>
    </tr>
  )
}*/

/* <div>  
          <h1> Simple Popup Example In React Application </h1>  
            <button onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button>  
              {this.state.showPopup 
              <Popup closePopup={this.togglePopup.bind(this)} />  
              : null  
              }  
        </div> 
      </div> */     


      {/*<div class="dropdown show">
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Velg
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a class="dropdown-item" href="#">F</a>
                                    <a class="dropdown-item" href="#">M</a>
                                </div>
                                </div>*/}