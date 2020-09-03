import React, { Component } from 'react'
import './post.css';

export default class Post extends Component {
    
        state = {
            postID: this.props.match.params.id,
            title: "",
            entry: "",
            author: "",
            title: "",
            date: ""
        }  
    
  

    // renderBlog(data) {
    //     console.log(data.blogs[0])
    //     this.setState({ entry: data.blogs[0].entry })
    //     this.setState({ author: data.blogs[0].author })
    //     console.log(entry)
    // }

    async componentDidMount(){
        const url = `http://localhost:3000/blogs/${this.state.postID}`;
        const response = await fetch(url)
        const data = await response.json();
        console.log(data)
        this.setState({ title: data.blogs[0].title })
        this.setState({ author: data.blogs[0].author })
        this.setState({entry : data.blogs[0].entry})
        this.setState({date : data.blogs[0].createdat})
    }

    // getBlog(id) {
    //     fetch(`http://localhost:3000/blogs/${id}`)
    //         .then(r => r.json())
    //         .then(this.renderBlog)
    //         .catch(console.warn)
    // }

    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <p>{this.state.entry}</p>
                <p className="smaller">Author: {this.state.author}</p>
                <p className="smaller">Date: {this.state.date.slice(0,10)}</p>    
            </div>
        )
    }
}
