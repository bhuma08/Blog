import React, { Component } from 'react';

class Home extends Component {

    state = {
        author:"",
        title:"",
        entry:""
    }

    handleChange = e => {
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
            .catch(console.warn)
    }

    render(){
        return(
            <div>
                <form id="mainForm" onSubmit={this.handleSubmit}>

                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" onChange={this.handleChange}/>

                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange}/>

                    <label htmlFor="entry">Entry</label>
                    <input type="text" id="entry" onChange={this.handleChange}/>

                    <input type="submit"/>
                </form>

            </div>
        )
    }
}

export default Home;