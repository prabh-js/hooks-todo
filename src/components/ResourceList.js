import React from 'react';
import useResources from '../Hooks/useResources';

const ResourceList = ({ resource }) => {
    const resources = useResources(resource);
    return (
        <ul>{resources.map((record) => {
           return <li key={record.title}>{record.title}</li>
        })}</ul>
    )

}
export default ResourceList