import { Link, useParams } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';
import { useState, useEffect } from 'react';

const ProductScreen = () => {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);

  const [mainImage, setMainImage] = useState(product ? product.images[0] : '');

  useEffect(() => {
    if (product) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div>
        <h2>Product not found</h2>
        <Link className='btn btn-light my-3' to='/'>
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={mainImage} alt={product.name} fluid />
          <Row className='mt-3'>
            {product.images.map((image, index) => (
              <Col key={index} xs={3} md={2}>
                <Image
                  src={image}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  fluid
                  onClick={() => setMainImage(image)}
                  className='thumbnail'
                  style={{ cursor: 'pointer' }}
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroup.Item>
              <strong>Description:</strong> {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={2}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
