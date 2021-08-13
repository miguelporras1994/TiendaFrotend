/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Filter from '../components/Filter';
import ContainerProduct from '../components/ContainerProduct';
import Product from '../components/Product';
import '../assets/styles/components/Home.scss';
import '../assets/App.scss';
import UseInitialState from '../hooks/UseInitialState';

const Admin = ({Result}) => {

  // function Example() {
  //   const [show, setShow] = useState(false);
  
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
    

  return Result.length  == 0 ? <h1>cargando ..</h1> : (
    <> 
    
      <div className='Container'>
       <button >Crear Producto</button>
        <section className='carousel_Search'>
          <Filter />
          <ContainerProduct>
            {Result.map(item => <Product key={item._id} {...item} />)}
          </ContainerProduct>
        </section>
      </div>


      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
{/* 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}

    </>
  );
};

const mapStateToProps = (state) => {
  return {
    Result: state.result,
  };
};

export default connect(mapStateToProps, null)(Admin);
