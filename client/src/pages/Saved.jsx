import React from "react";
import { Jumbotron, Container, Card } from 'react-bootstrap'
import BookCard from "../components/SavedBookCard/BookCard"

function Saved ()  {

    return (
        <Container className ="main">
            <Jumbotron id ="jumbotron">
                <h1>Google Books Saved</h1>
                <p>
                    All saved books will be shown here, you have the option to view or delete them.
                </p>
            </Jumbotron>

            <Card id = "resultsCard">
                <Card.Header>Saved Books</Card.Header>
                <Card.Body>
                    <BookCard>
                    </BookCard>
                </Card.Body>
            </Card>
        </Container>
    );

}

export default Saved;