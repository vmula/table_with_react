import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Table () {
    const [data, setData] = useState([]);
    
    useEffect(() => {
       (async () => {
                const result = await axios('https://api.tvmaze.com/search/shows?q=snow');
                setData(result.data);
                console.log(result.data);
            }
        )(); 
    }, []);


    const showName = data.map(item => {
        return (
            <tr id={ item.show.id.toString() }>
                <td>{ item.show.name }</td>
                <td>{ item.show.type }</td>
                <td>{ item.show.language }</td>
                <td><div dangerouslySetInnerHTML={ {__html: item.show.summary} } /></td>
            </tr>
        )
    });

    return (
        <div className="Table">
            <table>{ showName }</table>
        </div>
    );

}

export default Table;

