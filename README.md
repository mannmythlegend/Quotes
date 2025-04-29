# Quotes

This is my Quote Generator Web App!

1. Thoughts and Processes:
  Given the requirements, it made sense to me that we could split the tasks up to 5 components:
    - QuoteDisplay: displays the currently selected quote. selects the quote to be displayed, and makes a Quote Card for it. also displays a character count of the quote
    - FavoriteQuotes: displays our list of current favorite quotes in a list of quote cards. you can delete a quote from your favorites by clicking the trash can icon from material ui. 
    - QuoteCard: the bulk of the program. gives functionality to copy to clipboard, favorite the quote if not a favorite already, and remove from favorites if the quote is in favorites. in the prior 2 components we pass in if this quote card is in the favorites list or just a standard quote card. Also adds a character count
    - App.jsx: This ties all the 3 custom components into the actual main component. we use localStorage to store our favorites list, and fetch our favorites at the start by that.
    - App.css: This manages the css styling to all of the 4 components above. this is where I spent the bulk of designing the UI for the program. this helped use a consistent design for all of the components too instead of making separate css classes for each component

2. Features and Functionalities:
   Functionalities as mentioned above are to copy the clipboard, delete an item from your favorites, and favorite a quote. I used icons accordingly from material ui, and built in functionality into those icons. Copy to clipboard uses the navigator.clipboard to copy the text. Favoriting is handled in App, and adds the quote to favorites if the quote is not already there. Removing a favorite is also in App, and just simply removes the the quote from favorites. Another functionality is character length. in the quote card, if the text is empty, it doesn't display the length, but if there is text, I just displayed text.length. localStorage will grab the favorites stored in local storage from App.

   The static array of quotes is stored in the App component. It includes the first 25 quotes I found on https://www.timechamp.io/blogs/the-100-best-and-most-famous-quotes-of-all-time/ and structures by text and author so it's easier to pass into a quote card, and display that.

3. Setup Instructions:
   Once you clone the repository, it should be ready to go with the npm start command!
