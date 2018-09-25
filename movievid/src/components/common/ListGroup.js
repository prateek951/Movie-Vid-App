import React from "react";

const ListGroup = ({
  genres,
  onGenreSelect,
  textProperty,
  valueProperty,
  selectedGenre
}) => {
  console.log(genres);
  return (
    <ul className="list-group">
      {genres.map(genre => (
        <li
          key={genre[valueProperty]}
          onClick={() => onGenreSelect(genre)}
          className={genre === selectedGenre ? 'list-group-item active' : 'list-group-item'}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
