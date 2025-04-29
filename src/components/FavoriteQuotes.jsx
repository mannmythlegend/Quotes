import React from "react";
import QuoteCard from "./QuoteCard"; 
import '.././App.css';

function FavoriteQuotes({ favorites, onRemove }) {
  return (

    // favorites component. if no favorites, show message that there aren't any. if there are some, show them in a grid
    <div className="favorite-quote-card">
      <h2 className="favorite-quotes h2">Favorite Quotes</h2>
      {favorites.length === 0 ? (
        <p className="no-favorites">No favorites yet, add some!</p>
      ) : (
        <div className="favorite-quotes">
          {favorites.map((quote, index) => (
            <QuoteCard
              key={index}
              text={quote.text}
              author={quote.author}
              showRemoveButton={true}
              onRemove={() => onRemove(quote.text)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoriteQuotes;
