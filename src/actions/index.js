import axios from 'axios';

export const SaveSearch = payload => ({
    type: 'Save_Search',
    payload,
  });


export const Search01 = (props) => {
    console.log('estoy action')
    console.log(props);
   
  return (dispatch) => {
  
    axios({
      url: `http://localhost:3002/api/search/${props.search}`,
      method: 'get',
    })
      .then(({ data }) => {
        console.log(data)
        console.log(data.data)
        
        dispatch(SaveSearch(data.data));
      })
      .catch((err) => dispatch(setError(err)));
  };
};

export const handleSubmit2 = (props) => {
  console.log('estoy aqui');
  console.log(props);
  return (dispatch) => {
    axios({
      url: `https://localhost:44389/api/business/${props.identification_number}`,
      method: 'put',
      data: props,

    })
      .then(({ data }) => {
        alert('su informacion fue guardad');
        window.location.href = 'http://localhost:8080';
      })
      .catch((err) => dispatch(setError(err)));
  };
};
