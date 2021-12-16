import axios from 'axios';

const service = 'http://localhost:3002'

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

    axios({
    
      url: `${service}/api/search/${props.search}`,
      method: 'get',
    })
      .then(({ data }) => {
        console.log(data.data)
        window.localStorage.setItem("text",JSON.stringify(data.data))
        dispatch(SaveSearch(data.data));
     
      })
      .catch((err) => dispatch(setError(err)));
  };
};

export const CreateProducts = (props) => {

  return (dispatch) => {
    axios({
      url: `${service}/api/products`,
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
