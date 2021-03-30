import React, {Component} from "react"
import WebsitePage from "./WebsitePage"

class Holes extends Component {
  constructor() {
      super()
      this.state = {
          book: {}, //really just here for reference. 
          covers: "", //url number to find picture with https://covers.openlibrary.org/b/id/!!!PUT COVER NUMBER HERE!!!-L.jpg
          firstSentence: "",
          subjects: [],
          description: "",
          authorKey: "", //URL ending to find website url https://openlibrary.org!!!PUT AUTHOR THING HERE!!!
          title: "",
          author: "",
          didchange: false
      }
  }

componentDidMount() {
  fetch("https://openlibrary.org/works/OL116267W.json")
    .then(response => response.json())
    .then(data => {
      this.setState({
        //this.state.book.covers[0].value
        book: data,
        covers: data.covers[0],
        //firstSentence: data.first_sentence.value,
        subjects: data.subjects,
        description: data.description,
        authorKey: data.authors[0].author.key,
        didchange: true
      })
    })
    fetch("https://openlibrary.org/authors/OL29774A.json")
    .then(response => response.json())
    .then(data => {
      this.setState({
        author: data.name
      })
    })
}
// fetch(`https://openlibrary.org${this.state.authorKey}.json`)
// componentDidMount() {

// }
    
render() {
    return (
        <div>
            <WebsitePage 
                book = {this.state.book}
                cover = {this.state.covers}
                firstSentence = {this.state.firstSentence}
                subjects = {this.state.subjects}
                description = {this.state.description}
                authorKey = {this.state.authorKey}
                author = {this.state.author}
            />
        </div>
    )
  }
}
export default Holes