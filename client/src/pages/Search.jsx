import React, { useEffect, useState } from "react";
import { Jumbotron, Container, Card, Form, Button } from 'react-bootstrap'
import axios from 'axios';
import SearchedBookCard from "../components/SearchedBookCard/BookCard"



function Search () {
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [url, setUrl] = useState(``);

    function handleChange(event) {
        event.preventDefault();
        //console.log("Submitted: " + searchTerm);
    }

    useEffect(() => {  
            const fetchData = async () => {
            const result = await axios(url);
            setItems(result.data)
        }
            fetchData();
    }, [url]);

    //console.log(items);

    return (
        <Container className ="main">
            <Jumbotron id ="jumbotron">
                <h1>Google Books Search</h1>
                <p>
                    Search for books of interest here, find something you like? View, then save it and view on the saved books page.
                </p>
            </Jumbotron>

            <Card>
                <Card.Header>Books Search</Card.Header>
                <Card.Body>
                    <Form onChange={handleChange}> 
                    <Form.Group controlId = "booksearch">
                        <Form.Control autoFocus type="text" placeholder="Type Book Title Here" value = {searchTerm} onChange = {e=> setSearchTerm(e.target.value)}/>
                    </Form.Group>
                    <Button variant="light btn-sm" type="button" onClick={() => setUrl(`https://books.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyCT4ndO_FO6f72PXHqey5q-SOSGNb7aS0U`)}>
                        Search
                    </Button>
                    </Form>
                </Card.Body>
            </Card>

            <Card id = "resultsCard" >
                <Card.Header>Search Results</Card.Header>
                <Card.Body>
                    <SearchedBookCard {...items}></SearchedBookCard>
                </Card.Body>
            </Card>
        </Container>

    )
}

export default Search;