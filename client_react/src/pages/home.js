import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Form(){
    const [ author, setAuthor ] = useState("")
    const [ title, setTitle ] = useState("")
    const [ entry, setEntry ] = useState("")

    let history = useHistory();
    const handleChange1 = e =>{
        setAuthor(e.target.value)
    }
    const handleChange2 = e =>{
        setTitle(e.target.value)
    }
    const handleChange3 = e =>{
        setEntry(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log("All submitted")
        console.log(author)
        axios.post(`http://localhost:3000/blogs`, { author, title, entry })
        .then(function (response) {
            console.log(results);
        })
        history.push('./:id')
    }

    return(
        <>
            <form id="mainForm" onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange1} id="author" value={author}/>
                <input type="text" onChange={handleChange2} id="title" value={title} />
                <input type="text" onChange={handleChange3} id="entry" value={entry}/>
                <input type="submit"/>
            </form>
        </>
    )

}


export default Form;

