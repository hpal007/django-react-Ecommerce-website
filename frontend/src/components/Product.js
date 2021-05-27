import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { products } = props;
  return (
    <Card className="my-3 p-3">
      <Link to={`/product/${products._id}`}>
        <Card.Img src={products.image} />
      </Link>

      <Card.Body>
        <Link to={`/product/${products._id}`}>
          <Card.Title as="div">{products.name}</Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={products.rating}
              text={` ${products.numReviews} review `}
              color={"#f8e825"}
            />
          </div>
        </Card.Text>

        <Card.Text as="h3">₹{products.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
