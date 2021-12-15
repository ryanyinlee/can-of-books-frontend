import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import DeleteButton from './DeleteButton';
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

                    <li key={oneBook._id}>
                      <h3>{oneBook.title}</h3><br></br>
                      <p>{oneBook.description}</p>
                      <p>{oneBook.status}</p>
                      <p>{oneBook.email}</p>
                      <span onClick = {() => this.props.updateBook(this.state.books._id)}> <Button/></span>
                      <span onClick = {() => this.props.deleteBook(this.state.books._id)}> <DeleteButton/></span>
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
