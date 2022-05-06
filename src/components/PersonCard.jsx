import React, {Component} from "react";

class PersonCard extends Component{
    constructor(props) {
        super(props);
        const {age} = this.props
        this.state = {
            increment: age
        }
    }
    // Method
    incrementByOne = () => {
        let {increment} = this.state
        this.setState({
            increment: increment + 1
        })
        console.log(this.state.increment)
    }

    render(){
        const {firstName, lastName, hairColor} = this.props;  
        return (<div>
            <h1>{lastName},{firstName}</h1>
            <p>AGE:{this.state.increment}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={this.incrementByOne}> Birthday Button for {firstName} {lastName}</button>
        </div>)
    }
}
export default PersonCard;