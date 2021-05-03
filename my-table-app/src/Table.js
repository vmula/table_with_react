import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Table.css';

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


    const showName = data.map((item, index) => {
        return (
            <tr key={ index } id={ item.show.id.toString() }>
                <td>{ item.show.name }</td>
                <td>{ item.show.type }</td>
                <td>{ item.show.language }</td>
                <td><div dangerouslySetInnerHTML={ {__html: item.show.summary} } /></td>
            </tr>
        )
    });

    function handleSort (event) {
        const colName = event.target.innerText;
        
        console.log(event.target);
        console.log(event.target.innerText);
    }

    return (
        <div className="Table">
            <table className="movies-table">
                <thead>
                    <tr>
                        <th onClick={ handleSort }>Name</th>
                        <th>Type</th>
                        <th>Language</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>{ showName }</tbody>
            </table>
        </div>
    );

}

export default Table;

