import {useEffect, useState} from 'react';
import axios, {AxiosResponse} from 'axios';

function useFetch(url: string) {
    const [data, setData] = useState<any>([]);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
        await axios.get(`${url}`)
            .then((response:AxiosResponse<any,  any>) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            });
        setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}


export default useFetch;
