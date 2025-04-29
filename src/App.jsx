import { useState, useEffect } from "react";
import QuoteDisplay from "./components/QuoteDisplay";
import FavoriteQuotes from "./components/FavoriteQuotes";


// some sample quotes. grabbed the first 25 on https://www.timechamp.io/blogs/the-100-best-and-most-famous-quotes-of-all-time/ 
const quotes = [
  { text: "I think, therefore I am.", author: "René Descartes" },
  { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
  { text: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
  { text: "Time management is about life management.", author: "Idowu Koyenikan" },
  { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "Well done is better than well said.", author: "Benjamin Franklin" },
  { text: "Coming together is a beginning. Keeping together is progress. Working together is success.", author: "Henry Ford" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "In union there is strength.", author: "Aesop" },
  { text: "You will face many defeats in life, but never let yourself be defeated", author: "Maya Angelou" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { text: "Imagination is more important than knowledge.", author: "Albert Einstein" },
  { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
  { text: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough", author: "Oprah Winfrey" },
  { text: "The successful warrior is the average man, with laser-like focus.", author: "Bruce Lee" },
  { text: "What we think, we become.", author: "Buddha" },
  { text: "Alone we can do so little; together we can do so much.", author: "Helen Keller" },
  { text: "Don’t let the fear of losing be greater than the excitement of winning.", author: "Robert Kiyosaki" },
  { text: "Lost time is never found again.", author: "Benjamin Franklin" },
  { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "Change your thoughts and you change your world.", author: "Norman Vincent Peale" },
  { text: "I think, therefore I am.", author: "T.S. Eliot" },
  { text: "Every moment is a fresh beginning.", author: "John Lennon" }
];

function App() {

  // use states to manage current quote and favorites. favorites are stored in local storage
  const [currentQuote, setCurrentQuote] = useState({});
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    getRandomQuote();
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // get random quote from array. ensures the same quote is not shown twice in a row
  const getRandomQuote = () => {
    if (quotes.length === 0) return;

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (currentQuote && quotes[randomIndex].text === currentQuote.text);

    setCurrentQuote(quotes[randomIndex]);
  };

  const addToFavorites = (quote) => {
    if (!favorites.find(fav => fav.text === quote.text)) {
      setFavorites([...favorites, quote]);
    }
  };

  const removeFromFavorites = (text) => {
    setFavorites(favorites.filter(q => q.text !== text));
  };


  // made a container to display the current quote and favorites
  return (
    <div className="app-container">
      <h1 className="header-title">Quote Generator</h1>
      <div>
        <QuoteDisplay
          quote={currentQuote}
          onNewQuote={getRandomQuote}
          onFavorite={addToFavorites}
        />
        <hr />
        <FavoriteQuotes
          favorites={favorites}
          onRemove={removeFromFavorites}
        />
      </div>
    </div>
  );
}

export default App;
