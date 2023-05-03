import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

axios.defaults.baseURL = import.meta.env.VITE_SERVER_API;


export const useAxios = (axiosParams) => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const dataUser = useSelector((state) => state?.data?.dataUser);

  const fetchData = async (params) => {
    try {
      const result = await axios.request({
        ...params,
        headers: {
          accept: '*/*',
          Authorization: 'Bearer ' + dataUser.token
        }
      });
      setResponse(result);
    } catch( err ) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return { response, error, loading };
};
