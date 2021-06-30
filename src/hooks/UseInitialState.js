/* eslint-disable semi */
import { useState, useEffect } from 'react';

const UseInitialState = (API) => {

  const [responses, setresponses] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((Response) => Response.json())
      .then((data) => setresponses(data));
  }, []);

  return responses

};

export default UseInitialState;
