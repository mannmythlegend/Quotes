import React from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import StarIcon from '@mui/icons-material/Star';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';
import '.././App.css';


function QuoteCard({ text, author, showFavoriteButton, showRemoveButton, onFavorite, onRemove}) {
  // copy to clipboard with navigator
  const handleCopy = () => {
    navigator.clipboard.writeText(`"${text}" - ${author || "Unknown"}`);
  };

  return (
    // handles which quote card to use based on favorite or current quote
    // i used the star icon from material ui to represent favorites (I thought the gold was better with the ui than a heart)
    // the delete icon is the trash can icon from material ui
    
    <div className="quote-card">
      <p className="quote-text">"{text}"</p>

      <div>
        <p className="quote-author">- {author || "Unknown"}</p>
        <p className="quote-length">
          Length: {text ? text.length : 0} characters
        </p>
        <div>
          <IconButton onClick={handleCopy} color="primary" aria-label="Copy Quote">
            <ContentCopyIcon />
          </IconButton>
          {showFavoriteButton && (
            <IconButton onClick={onFavorite} color="warning" aria-label="Favorite Quote">
              { <StarIcon /> }
            </IconButton>
          )}
          {showRemoveButton && (
            <IconButton onClick={onRemove} color="error" aria-label="Remove Quote">
              <DeleteOutlineIcon />
            </IconButton>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
