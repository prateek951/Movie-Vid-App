import React from 'react';

const ListGroup = ({genres,onGenreSelect}) => {
    console.log(genres);
    return (
       <ul className="list-group">
           {genres.map(genre => <li key={genre._id} onClick={() => onGenreSelect(genre)} className="list-group-item">{genre.name}</li>)}
       </ul>
    );
}

export default ListGroup;
