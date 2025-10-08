import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(()=>{
    setLoading(true);
    axios('../AppsData.json').then(data=>setData(data.data)).catch(err=> setError(err)).finally(()=>setLoading(false));
  },[])
  return {data, loading, error};
};

export default useData;