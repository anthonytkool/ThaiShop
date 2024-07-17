import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Button,
  ListGroupItem,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { useGetOrderDetailsQuery } from '../slices/orderApiSlice.js';

const OrderScreen = () => {
  const { id: orderId } = useParams();

  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId);
  console.log(order);
  return (
    <>
      <h1>OrderScreen</h1>
    </>
  );
};
export default OrderScreen;
