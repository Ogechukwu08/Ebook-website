// EBOOK WEBSITE
function toggleDropdown(){
  let dropdown =document.getElementById("dropdown-menu");
  if (dropdown.style.display === "block"){
    dropdown.style.display = "none";
 } else{
  dropdown.style.display = "block";
 }
}

// Your API key and the base URL
const API_KEY = "AIzaSyAI75bAX8uOuCpjR20frFkG5ZWLwz3vnsY"; // Replace with your actual API key
const BASE_URL = "https://www.googleapis.com/books/v1/volumes"; // Example: Google Books API

// Function to fetch books based on the search query
const searchBooks = async () => {
    // Get the search query from the input field
    const query = document.querySelector(".search-bar").value.trim();

    // If query is empty, alert the user
    if (!query) {
        alert("Please enter a book title or author.");
        return;
    }

    try {
        // Fetch data from the API
        const response = await fetch(`${"https://www.googleapis.com/books/v1/volumes"}?q=${query}&key=${"AIzaSyAI75bAX8uOuCpjR20frFkG5ZWLwz3vnsY"}`);
        const data = await response.json();

        // If no items found, display a message
        if (!data.items) {
            document.getElementById("books").innerHTML = "<p>No books found. Try a different search.</p>";
            return;
        }

        // Display the books
        displayBooks(data.items);
    } catch (error) {
        // In case of an error, display an error message
        console.error("Error fetching books:", error);
        document.getElementById("books").innerHTML = "<p>Something went wrong. Please try again later.</p>";
    }
};

// Function to display the books on the page
const displayBooks = (books) => {
    // Clear previous results
    const booksContainer = document.getElementById("books");
    booksContainer.innerHTML = "";

    // Loop through each book and create a card for it
    books.forEach(book => {
        const title = book.volumeInfo.title;
        const author = book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown Author";
        const image = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "default-image.jpg"; // Fallback image
        const infoLink = book.volumeInfo.infoLink;

        // Create a book card element
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        bookCard.innerHTML = `
            <img src="${image}" alt="${title}">
            <h3>${title}</h3>
            <p>by ${author}</p>
            <a href="${infoLink}" target="_blank">More Info</a>
        `;

        // Append the book card to the books container
        booksContainer.appendChild(bookCard);
    });
};

// Listen for the "Enter" key press on the search bar
document.querySelector(".search-bar").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      searchBooks(); // Trigger the search when "Enter" is pressed
  }
});

function fetchBooks() {
    const API_KEY = "AIzaSyAI75bAX8uOuCpjR20frFkG5ZWLwz3vnsY"; // Replace with your actual API key
    const query = 'fiction'; // You can change this to any genre or keyword
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&key=${API_KEY}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const books = data.items;
        const booksContainer = document.getElementById('books');
  
        books.forEach(book => {
          const title = book.volumeInfo.title || 'No Title';
          const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author';
          const imageUrl = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'default-image-url.jpg';
          const infoLink = book.volumeInfo.infoLink || '#';
  
          const bookCard = document.createElement('div');
          bookCard.classList.add('book-card');
  
          bookCard.innerHTML = `
            <img src="${imageUrl}" alt="${title}" />
            <h3>${title}</h3>
            <p>by ${authors}</p>
            <a href="${infoLink}" target="_blank">More Info</a>
          `;
  
          booksContainer.appendChild(bookCard);
        });
      })
      .catch(error => console.error('Error fetching books:', error));
  }
  
  window.onload = fetchBooks;





















