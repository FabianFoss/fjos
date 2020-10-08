import React from 'react';  
import './App.css'; 
import { rootCertificates } from 'tls';
import Button from 'react-bootstrap/Button';

class Landing extends React.Component {
    constructor (props) {
        super(props);
    }    

    render () {
        return (
            <div className="wholelanding">
                <div>
                    <h1 className='tittel2'>So you think you can fjøs?</h1>
                    <h3 className='fjose'>For å ha muligheten til å fjøse må du fylle ut riktig ord til påstanden:</h3>
                    <h3 className='nicco'>"Nicco er..."</h3>
                    <ul className='passord'>
                        <Button onClick={this.props.closeLanding} className='paas'>Hvem er det?</Button>
                        <Button onClick={this.props.closeLanding} className='paas'>TP sjef by day, Ed Sheeran by night!</Button>
                        <Button onClick={this.props.closeLanding} className='paas'>En kortere Mathis</Button>
                    </ul>
                    <div><img src='src/podium.jpg' alt="" width='200px' height='150px'/></div>
                    
                </div>
            </div>
        )

    }

}

export default Landing;