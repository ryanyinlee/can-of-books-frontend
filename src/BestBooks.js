import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class BestBooks extends React.Component {

 handleClick = () => {
  
    this.setState({showModal: true});
  
  }
  
  showModal =() => {
  
    this.setState({showModal:true});
  }
  
  closeModal = () => {
  
    this.setState({showModal:false});
  }

  render() {

    /* DONE: render user's books in a Carousel */
    console.log("books id:" + this.props.books.id)
    
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2><br></br>

        {this.props.books.length > 0 ?
          (
            <Carousel>
              {this.props.books.map(oneBook =>
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
                      {/* <span onClick = {() => this.props.updateBook(this.state.books._id)}> <Button>Update Book</Button></span> */}
                      
                      <span> <Button onClick = {() => this.props.deleteBook(oneBook._id)}>Delete</Button></span>
                    
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
