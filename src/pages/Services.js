import React, { useEffect, useState } from 'react';
import fetcher from '../api';

const Services = () => {
    const [services, setServices] = useState()
    useEffect(() => {
        fetcher.get("/service").then(res => setServices(res))
    }, [])
    return (
        <div>
            <h1>This is Servcees</h1>
            <h1>This is Servcees</h1>
            <h1>This is Servcees</h1>
            <h1>This is Servcees</h1>
            <h1>This is Servcees</h1>
            <h1>This is Servcees</h1>
            <h1>This is Servcees</h1>
            <h1>This is Servcees</h1>
            <h1>This is Servcees</h1>
            <h1>This is Servcees</h1>
            <h1>This is Servcees</h1>
            <h1>This is Servcees</h1>
        </div>
    );
};

export default Services;