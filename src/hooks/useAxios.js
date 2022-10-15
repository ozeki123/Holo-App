import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

export const useAxios = (axiosParams) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = async (params) => {
    try{
      const result = await axios.request(params);
      setResponse(result.data);
    } catch(error) {
      setError(error);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, [axiosParams]);

  return { response, error, loading }
}

export const useGetAxios = (url) => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = () => {
      try{
        const { response: response } = axios.get(url);
        setResponse(response);
      } catch(err) {
        console.log(err)
      }
      setLoading(false);
    };

    getData();
  }, []);

  return { response, loading }
}