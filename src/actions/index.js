import axios from 'axios';
// require('dotenv').config();

// const { ENV, PORT } = process.env;

export const SaveSearch = payload => ({
    type: 'Save_Search',
    payload,
  });


export const SearchProduct = (props) => {  
  return (dispatch) => {
     var url = '/';
      var urlAdmin = '/admin';
       var GetUrl = window.location.pathname;
       
       if(GetUrl != url ){
         if(GetUrl == urlAdmin)
         {

         }else{
          window.location.href = 'http://localhost:8080/'
         }
        
       }
        console.log(props.search)
    axios({
    
      url: `${process.env.REACT_APP_API_URL}/api/search/${props.search}`,
      method: 'get',
    })
      .then(({ data }) => {
        dispatch(SaveSearch(data.data));
     
      })
      .catch((err) => dispatch(setError(err)));
  };
};

export const CreateProducts = (props) => {

  return (dispatch) => {
    axios({
      url: `${process.env.API_URL}/api/products`,
      method: 'post',
      data: props,

    })
      .then(({ data }) => {
        alert('Producto Guardado');
        window.location.href = 'http://localhost:8080/admin';
      })
     .catch((err) => dispatch(setError(err)));
  };
};



export const  EditProduct = (props) => {
  var product = {
       title :  props.title,
        description : props.description,
        price : props.price,
       ulrpicture : props.ulrpicture
      
  }
  return (dispatch) => {
    axios({
      url: `${process.env.API_URL}/api/products/${props._id}`,
      method: 'put',
      data: product,

    })
      .then(({ data }) => {
        alert('Producto Editado Exitosamente');
         window.location.href = 'http://localhost:8080/admin';
      })
     .catch((err) => dispatch(setError(err)));
  };
};
