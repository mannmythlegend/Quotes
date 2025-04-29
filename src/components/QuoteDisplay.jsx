import React from "react";
import QuoteCard from "./QuoteCard";

function QuoteDisplay({ quote, onNewQuote, onFavorite }) {
  if (!quote) return null;
  // put text and author in quote object

  const { text, author } = quote;

  // display the quote. the button will retrieve a new quote from the array
  return (
    <div>
      <QuoteCard
        text={text}
        author={author}
        showFavoriteButton={true}
        onFavorite={() => onFavorite(quote)}
      />
      <div>
        <button
          onClick={onNewQuote}
          className="button"
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default QuoteDisplay;
