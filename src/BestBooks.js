import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class BestBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* DONE: Make a GET request to your API to fetch books for the logged in user  */
  getBooks = async () => {

    let url = `${process.env.REACT_APP_SERVER_URL}/books`;
    console.log(url);

    if (this.props.user) {
      url = `${process.env.REACT_APP_SERVER_URL}/books?email=${this.props.user.email}`;
      console.log(url);
    }
    
    try {
      let result = await axios.get(url);
      console.log(result.data);
      this.setState({ books: result.data })
      console.log(this.state.books);
      console.log(this.state.books[0].title);
      this.setState({ error: false });
    }
    catch (error) {
      console.error(error);
      this.setState({ error: true });
    }
  }

  componentDidMount() {
    this.getBooks();
  }


  render() {

    /* DONE: render user's books in a Carousel */
    console.log(this.props.deleteBook);
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2><br></br>

        {this.state.books.length > 0 ?
          (
            <Carousel>
              {this.state.books.map(oneBook =>
                <Carousel.Item>
                  {/* <Carousel.Caption>  */}
                    <Card>
                    <img src="https://media.istockphoto.com/photos/row-of-books-on-a-shelf-multicolored-book-spines-stack-in-the-picture-id1222550815?b=1&k=20&m=1222550815&s=170667a&w=0&h=MTxBeBrrrYtdlpzhMpD1edwLYQf3OPgkNeDEgIzYJww=" alt = "book placeholder"
                    />
                    <li key={oneBook._id}>
                      <h3>{oneBook.title}</h3><br></br>
                      <p>{oneBook.description}</p>
                      <p>{oneBook.status}</p>
                      <p>{oneBook.email}</p>
                      <span onClick = {() => this.props.updateBook(this.state.books._id)}> <Button>Update Book</Button></span>
                      <span> <Button onClick = {() => this.props.deleteBook(this.state.books._id)}>Delete</Button></span>
                    </li>

                    </Card>

                  {/* </Carousel.Caption> */}
                </Carousel.Item>)}
            </Carousel>
          ) : (<h3>No Books Found :C</h3>)}
      </>
    )
  }
}

export default BestBooks;
