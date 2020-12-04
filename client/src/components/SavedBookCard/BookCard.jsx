import React, {useState, useEffect} from "react";
import { Card, Button } from "react-bootstrap";
import API from "../../utils/API";


function BookCard (props) {

    const [books, setBooks] = useState([])
    let renderedBookArray;

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
    };

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(id) {
        API.deleteBook(id)
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }

    function createBookCard(book) {

        return (
            <Card className="col" key = {book._id}>
            <Card.Img variant="top" src={book.image} style = {{ width: "100px"}}/>
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle>{book.author[1] ? book.author[1] + ", " + book.author[0] : book.author[0]}</Card.Subtitle>
                <Card.Text className = "text-truncate">{book.description}</Card.Text>
                <Card.Link href={book.link} target = "_blank" >Read More Here</Card.Link>
                <Button variant="primary" className= "btn-sm deleteBtn" listid = {book._id} onClick={() => deleteBook(book._id)}>Delete</Button>
            </Card.Body>
        </Card>
        );
    }

    if(books) {
        renderedBookArray = books.map(createBookCard)
        return renderedBookArray;
    }else{
        return (
            <p>no books saved!</p>
        );
    }
}

export default BookCard;