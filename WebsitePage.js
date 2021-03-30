import React from "react"

function WebsitePage(props) {

    // let authorName = "";
    // console.log(props.authorKey)

   
    // fetch("https://openlibrary.org/authors/OL548174A/")
    //  fetch(`https://openlibrary.org${props.authorKey}.json`)
    // .then(response => response.json())
    // .then(data => authorName = data.name)

    return (
        <div>
            <div className = "title"><h2>Title: {props.book.title}</h2></div>
            <div className = "author"><h3>Author: {props.author}</h3></div>
            <img className="picture" src={`https://covers.openlibrary.org/b/id/${props.cover}-L.jpg`} alt="logo"/>
            <div className = "description"><p>{props.description}{props.cover}</p></div>
            <div className = "subjects"><p>{props.subjects[0]}, {props.subjects[1]}, {props.subjects[2]}</p></div>
        </div>
    )
}

export default WebsitePage