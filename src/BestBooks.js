import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';


class BestBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  getBooks = async () => {
    let url = `${process.env.REACT_APP_SERVER_URL}/books`;
    console.log(url);

    try {
      let result = await axios.get(url);
      console.log(result.data);
      this.setState({ books: result.data})
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

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? 
          (
          <Carousel>
             {this.state.books.map(oneBook =>
              <Carousel.Item>
                  <li key={oneBook.title}>
                  <h3>{oneBook.title}</h3>
                  <Carousel.Caption>{oneBook.description}</Carousel.Caption>
                  {oneBook.status}
                  {oneBook.email}
                </li>
            
                          
            </Carousel.Item>)}
          </Carousel>
          ) : (<h3>No Books Found :(</h3>)}
      </>
    )
  }
}

export default BestBooks;

{/* <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}