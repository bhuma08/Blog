import React, { Component } from 'react';
import { withRouter } from "react-router";
import './home.css';

class Home extends Component {

    state = {
        author:"",
        title:"",
        entry:""
    }

    handleChange = e => {
        // const { id, value } = e.target;
        // this.setState({ [id]: value })
        this.setState({ author: e.target.author.value })
        this.setState({ title: e.target.title.value })
        this.setState({ entry: e.target.entry.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        
        const data = {
            author: e.target.author.value,
            title: e.target.title.value,
            entry: e.target.entry.value
        }
    
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"}
        }
    
        fetch('http://localhost:3000/blogs', options)
            .then(r => r.json())
            // .then(console.log)
            .then(resp => this.props.history.push(`/${resp.id}`))

            .catch(console.warn)

        
    }

    render(){
        return(
            <div>
                <form id="mainForm" onSubmit={this.handleSubmit}>
                    <input className='input' type="text" id="author" placeholder= 'Author' onChange={this.handleChange}/><br></br>
                    <input className='input' type="text" id="title" placeholder='Title' onChange={this.handleChange}/><br></br>
                    <textarea id="entry" placeholder='Entry' onChange={this.handleChange}/><br></br>

                    <input className='submit' type="submit"/>
                </form>

            </div>
        )
    }
}

export default withRouter(Home);