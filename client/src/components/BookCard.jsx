import React from "react";
import { Card, Button } from "react-bootstrap";
import API from "../../utils/API";

function SearchedBookCard (props) {

    //const [searchedBookObject, setSearchedBookObject] = useState({})

    let searchedBookArray = [];
    searchedBookArray = props.items;

    function handleEvent(e) {
        e.preventDefault();
    }
    function handleBookSave(id) {

        let savedIdArray = [
            {
                savedId: id
            }
        ]
        
        let newSavedBookArray = searchedBookArray.filter(o1 => savedIdArray.some(o2 => o1.id === o2.savedId));

        API.saveBook({
            title: newSavedBookArray[0].volumeInfo.title,
            author: newSavedBookArray[0].volumeInfo.authors,
            description: newSavedBookArray[0].volumeInfo.description,
            image: newSavedBookArray[0].volumeInfo.imageLinks.thumbnail,
            link: newSavedBookArray[0].volumeInfo.previewLink
          })
            .then(res => {
                console.log(res); 
                alert(`New book ${newSavedBookArray[0].volumeInfo.title} has been saved!`)
            })
            .catch(err => console.log(err));
        }

    function createSearchBookCard(book) {
        
        return (
            <Card className="col" key = {book.id}>
                <Card.Img variant="top" src={ book.volumeInfo.imageLinks === undefined ? `` : `${book.volumeInfo.imageLinks.thumbnail}`} style = {{ width: "100px"}}/>
                <Card.Body>
                    <Card.Title>{book.volumeInfo.title}</Card.Title>
                    <Card.Subtitle>{book.volumeInfo.authors[1] ? book.volumeInfo.authors[1] + ", " + book.volumeInfo.authors[0] : book.volumeInfo.authors[0]} </Card.Subtitle>
                    <Card.Text className = "text-truncate">{book.volumeInfo.description}</Card.Text>
                    <Card.Link href = {book.volumeInfo.previewLink} target = "_blank">Read More Here</Card.Link>
                    <Button variant="primary" className="btn-sm saveBtn" id = {book.id} onClick={(event) => {
                        handleBookSave(book.id);
                        handleEvent(event);
                    }}>Save</Button>
                </Card.Body>
            </Card>
        );
    }

    if(searchedBookArray) {
        let renderedsearchedBookArray = searchedBookArray.map(createSearchBookCard)
        return renderedsearchedBookArray;
    }else{
        return (
            <p>Search for some books!</p>
        );
    }


}

export default SearchedBookCard;