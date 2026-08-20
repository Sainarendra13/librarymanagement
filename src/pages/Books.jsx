import { useState } from "react";

function Books() {

  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Fiction",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJjeK7zsJxuwPVEFXr-z2GwXcMAqVtdgdjkVZcVyESOA&s=10"
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self Help",
      image: "https://jamesclear.com/wp-content/uploads/2026/07/atomic-habits-dots.png"
    },
    {
      id: 3,
      title: "Clean Code",
      author: "Robert Martin",
      category: "Programming",
      image: "https://m.media-amazon.com/images/I/71I-zd7XWkL._UF1000,1000_QL80_.jpg"
    },
    {
      id: 4,
      title: "Harry Potter",
      author: "J.K. Rowling",
      category: "Fantasy",
      image: "https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 5,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      category: "Finance",
      image: "https://www.porchlightbooks.com/cdn/shop/files/9780446677455.jpg?v=1729588472"
    },
    {
      id: 6,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      category: "Finance",
      image: "https://m.media-amazon.com/images/I/71oAJY1LbcL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 7,
      title: "Ikigai",
      author: "Hector Garcia",
      category: "Self Help",
      image: "https://m.media-amazon.com/images/I/71lJBs5MNlL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 8,
      title: "Deep Work",
      author: "Cal Newport",
      category: "Productivity",
      image: "https://m.media-amazon.com/images/I/61zt25yYrCL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 9,
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      category: "Self Help",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYJpPTTm-kG3kCXegacJG7EwCUDnEI6VmDJEEf2ABxjbfhf51JK563tg&s=10"
    }
  ]);


  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const [error, setError] = useState("");

  const [editId, setEditId] = useState(null);

  const [editTitle, setEditTitle] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const [editCategory, setEditCategory] = useState("");

  const [editError, setEditError] = useState("");


  /* Categories */

  const categories = [
    "All",
    "Fiction",
    "Self Help",
    "Programming",
    "Fantasy",
    "Finance",
    "Productivity"
  ];


  /* Add Book */

  function addBook() {

    if (title.trim() === "") {
      setError("Book title is required");
      return;
    }

    if (author.trim() === "") {
      setError("Author is required");
      return;
    }

    if (category.trim() === "") {
      setError("Category is required");
      return;
    }

    const bookExists = books.some(
      (book) =>
        book.title.toLowerCase() ===
        title.trim().toLowerCase()
    );

    if (bookExists) {
      setError("Book already exists");
      return;
    }

    const newBook = {
      id: books.length + 1,
      title: title.trim(),
      author: author.trim(),
      category: category.trim(),
      image: ""
    };

    setBooks([...books, newBook]);

    setTitle("");
    setAuthor("");
    setCategory("");

    setError("");
    setShowForm(false);
  }


  /* Delete Book */

  function deleteBook(id) {

    const updatedBooks = books.filter(
      (book) => book.id !== id
    );

    setBooks(updatedBooks);
  }


  /* Start Editing */

  function editBook(book) {

    setEditId(book.id);

    setEditTitle(book.title);
    setEditAuthor(book.author);
    setEditCategory(book.category);

    setEditError("");
  }


  /* Save Edited Book */

  function saveEdit(id) {

    if (editTitle.trim() === "") {
      setEditError("Book title is required");
      return;
    }

    if (editAuthor.trim() === "") {
      setEditError("Author is required");
      return;
    }

    if (editCategory.trim() === "") {
      setEditError("Category is required");
      return;
    }

    const bookExists = books.some(
      (book) =>
        book.id !== id &&
        book.title.toLowerCase() ===
        editTitle.trim().toLowerCase()
    );

    if (bookExists) {
      setEditError("Book already exists");
      return;
    }

    const updatedBooks = books.map(
      (book) =>
        book.id === id
          ? {
              ...book,
              title: editTitle.trim(),
              author: editAuthor.trim(),
              category: editCategory.trim()
            }
          : book
    );

    setBooks(updatedBooks);

    setEditId(null);

    setEditTitle("");
    setEditAuthor("");
    setEditCategory("");

    setEditError("");
  }


  /* Cancel Edit */

  function cancelEdit() {

    setEditId(null);

    setEditTitle("");
    setEditAuthor("");
    setEditCategory("");

    setEditError("");
  }


  return (
    <div className="books-page">

      {/* Books Header */}

      <div className="books-header">

        <div>

          <h1>Books</h1>

          <p>
            Manage all library books
          </p>

        </div>


        {/* Search */}

        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />


        {/* Add Book Button */}

        <button
          className="add-book-btn"
          onClick={() => {
            setShowForm(true);
            setError("");
          }}
        >
          + Add Book
        </button>

      </div>


      {/* Category Filter */}

      <div className="category-filter">

        {categories.map(
          (categoryName) => (

            <button
              key={categoryName}
              className={
                selectedCategory === categoryName
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() =>
                setSelectedCategory(categoryName)
              }
            >
              {categoryName}
            </button>

          )
        )}

      </div>


      {/* Add Book Form */}

      {showForm && (

        <div className="book-form">

          <h2>Add New Book</h2>

          <input
            type="text"
            placeholder="Book title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) =>
              setAuthor(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          />

          {error && (
            <p className="book-error">
              {error}
            </p>
          )}

          <button onClick={addBook}>
            Add Book
          </button>

        </div>

      )}


      {/* Books List */}

      <div className="books-list">

        {books

          .filter((book) =>
            book.title
              .toLowerCase()
              .includes(search.toLowerCase())
          )

          .filter((book) =>
            selectedCategory === "All"
              ? true
              : book.category === selectedCategory
          )

          .map((book) => (

            <div
              className="book-card"
              key={book.id}
            >

              {editId === book.id ? (

                <>
                  <h3>Edit Book</h3>

                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) =>
                      setEditTitle(e.target.value)
                    }
                  />

                  <input
                    type="text"
                    value={editAuthor}
                    onChange={(e) =>
                      setEditAuthor(e.target.value)
                    }
                  />

                  <input
                    type="text"
                    value={editCategory}
                    onChange={(e) =>
                      setEditCategory(e.target.value)
                    }
                  />

                  {editError && (
                    <p className="book-error">
                      {editError}
                    </p>
                  )}

                  <button
                    onClick={() =>
                      saveEdit(book.id)
                    }
                  >
                    Save
                  </button>

                  <button
                    onClick={cancelEdit}
                  >
                    Cancel
                  </button>
                </>

              ) : (

                <>

                  {book.image && (
                    <img
                      src={book.image}
                      alt={book.title}
                      className="book-image"
                    />
                  )}

                  <h3>
                    {book.title}
                  </h3>

                  <p>
                    Author: {book.author}
                  </p>

                  <p>
                    Category: {book.category}
                  </p>

                  <button
                    onClick={() =>
                      editBook(book)
                    }
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteBook(book.id)
                    }
                  >
                    Delete
                  </button>

                </>

              )}

            </div>

          ))}

      </div>

    </div>
  );
}

export default Books;