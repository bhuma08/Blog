import React, { Component } from 'react'

export default class Post extends Component {
    state = {
        postID: this.props.match.params.id
    }

    renderBlog(data) {
        return(
            <>
                {data}
            </>
        )
    }

    getBlog(id) {
        fetch(`http://localhost:3000/blogs/${id}`)
            .then(r => r.json)
            .then(this.renderBlog)
            .catch(console.warn)
    }
    render() {
        return (
            <div>
                {this.getBlog(this.state.postID)}
            </div>
        )
    }
}
