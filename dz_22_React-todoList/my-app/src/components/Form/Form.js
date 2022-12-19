import React, { Component } from 'react';

export class Form extends Component {
    

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSave({
            title: e.target.elements.title.value,

        })
       e.target.reset()
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input name="title" placeholder="title" />
                <button>Save</button>
            </form>
        );
    }
}

export default Form;


// state = {
    //     title: 'hello',
    //     author: 'world',
    // };

    // onSaveClick = () => {
    //     console.log('clicked');
    // };

    // onInputChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     });
    // };