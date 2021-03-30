import React from "react"
import "./Thecss.css"

function WebsitePage(props) {

    // let authorName = "";
    // console.log(props.authorKey)

   
    // fetch("https://openlibrary.org/authors/OL548174A/")
    //  fetch(`https://openlibrary.org${props.authorKey}.json`)
    // .then(response => response.json())
    // .then(data => authorName = data.name)

    return (
        <div className = "containter">       
                    <div className = "yas" id = "title"><h2>{props.book.title}</h2></div>
                    <div className = "yas" id = "author"><h3>Author: {props.author}</h3></div>
                    <div className = "yas"><img id = "picture" src={`https://covers.openlibrary.org/b/id/${props.cover}-L.jpg`} alt="logo"></img></div>               
                    <div className = "yas" id = "description"><p>{props.description}</p></div>
                    <div className = "yas" id = "subjects"><p><b>Categories: </b>{props.subjects[0]}, {props.subjects[1]}, {props.subjects[2]}</p></div>
        </div>
    )
}

export default WebsitePage