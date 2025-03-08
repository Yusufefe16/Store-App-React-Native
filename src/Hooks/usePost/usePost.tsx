import {useState} from 'react';
import axios from 'axios';

function usePost() {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const post = async (url: string, apiData: any) => {
        try {
            setLoading(true);
            const {data: responseData} = await axios.post(url, apiData);
            setData(responseData);
        }catch (e){
            setError(e);
        }finally {
            setLoading(false);
        }
    };

    return { data, loading, error, post };
}


export default usePost;
