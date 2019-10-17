import { useState, useEffect } from 'react';
import axios from '../apis/axios';

const useResources = (resource) => {
    const [resources, setResources] = useState([]);
    const fetchResources = async (resource) => {
        const response = await axios.get(`${resource}`);
        setResources(response.data);
    }
    useEffect(() => {
        fetchResources(resource);
    }, [resource])
    return resources;
}
export default useResources;