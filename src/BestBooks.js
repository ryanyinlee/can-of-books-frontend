import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import BookForModal from "./BookForModal";
import UpdateBookModal from "./UpdateBookModal";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
      bookToUpdate: [],
    };
  }

  handleClick = () => {
    this.setState({ showModal: true });
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  makeBook = async (newBook) => {
    console.log(`makeBook's newBook gives us: `, JSON.stringify(newBook));

    try {
      const userBooks = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/books`,
        newBook
      );
      // console.log(newBook);
      this.setState({ books: [...this.state.books, userBooks.data] });
    } catch (e) {
      console.log("error: " + e);
    }
  };

  deleteBook = async (id, email) => {
    console.log("deleteBook ID is: " + id);
    console.log("deleteBook email is: " + email);
    try {
      const url = `${process.env.REACT_APP_SERVER_URL}/books/${id}?email=${email}`;
      console.log(url);
      await axios.delete(url);

      const updatedBooks = this.state.books.filter((book) => book._id !== id);
      console.log("id: " + id);
      console.log("updatedBooks: " + updatedBooks);
      this.setState({ books: updatedBooks });
    } catch (e) {
      console.log("error: " + e);
    }
  };

  updateBook = async (updatedBookObj, id) => {
    try {
      const updatedBook = await axios.put(
        process.env.REACT_APP_SERVER_URL + "/books/" + id + updatedBookObj
      );
      const updatedBookState = this.state.books.map((book) => {
        if (book._id === id) {
          return updatedBook.data;
        }
        return book;
      });
      this.setState({ books: updatedBookState });
    } catch (e) {
      console.log("error: " + e);
    }
  };

  getBooks = async () => {
    let url = `${process.env.REACT_APP_SERVER_URL}/books`;

    console.log("getBooks email: " + this.props.user.email);
    if (this.props.user) {
      url = `${process.env.REACT_APP_SERVER_URL}/books?email=${this.props.user.email}`;
    }

    try {
      let result = await axios.get(url);

      this.setState({ books: result.data });
      this.setState({ error: false });
      //console.log(JSON.stringify(this.state.books[0]._id));
    } catch (error) {
      console.error(error);
      this.setState({ error: true });
    }
  };

  componentDidMount() {
    this.getBooks();
    console.log(this.props.user);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title: event.target.title.value || this.props.book.title,
      description:
        event.target.description.value || this.props.book.description,
      status: event.target.status.value || this.props.book.status,
      email: this.props.user.email,
    };
    console.log(
      "handleSubmit gives us newbook object: " + JSON.stringify(newBook)
    );
    this.makeBook(newBook);
    this.closeModal();
  };

  render() {
    /* DONE: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <br></br>

        {this.state.books.length > 0 ? (
          <Carousel variant="dark">
            {this.state.books.map((oneBook) => (
              <Carousel.Item>
                {/* <Carousel.Caption>  */}
                <Card>
                  <img
                    src="https://media.istockphoto.com/photos/row-of-books-on-a-shelf-multicolored-book-spines-stack-in-the-picture-id1222550815?b=1&k=20&m=1222550815&s=170667a&w=0&h=MTxBeBrrrYtdlpzhMpD1edwLYQf3OPgkNeDEgIzYJww="
                    alt="book placeholder"
                  />
                  <li key={oneBook.id}>
                    <h3>{oneBook.title}</h3>
                    <br></br>
                    <p>{oneBook.description}</p>
                    <p>{oneBook.status}</p>
                    <p>{oneBook.email}</p>

                    <span>
                      {" "}
                      <Button
                        onClick={() =>
                          this.deleteBook(oneBook._id, oneBook.email)
                        }
                      >
                        Delete
                      </Button>
                    </span>
                    {this.props.user && this.state.showModal ? (
                      <UpdateBookModal
                        handleSubmit={this.handleSubmit}
                        oneBook={oneBook}
                        showModal={this.state.showModal}
                        closeModal={this.closeModal}
                      />
                    ) : (
                      <Button onClick={this.handleClick}>
                        Update This Book
                      </Button>
                    )}
                  </li>
                </Card>

                {/* </Carousel.Caption> */}
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <h3>No Books Found :C</h3>
        )}

        {this.props.user && this.state.showModal ? (
          <BookForModal
            handleSubmit={this.handleSubmit}
            makeBook={this.makeBook}
            showModal={this.state.showModal}
            closeModal={this.closeModal}
          />
        ) : (
          <>
            {" "}
            <Button onClick={this.handleClick}> Add A Book</Button>
          </>
        )}
      </>
    );
  }
}

export default BestBooks;
