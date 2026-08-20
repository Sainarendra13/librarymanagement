import { useState } from "react";

function Transaction({ transactions, setTransactions }) {

  const [showForm, setShowForm] = useState(false);

  const [book, setBook] = useState("");
  const [member, setMember] = useState("");

  const [search, setSearch] = useState("");

  const [error, setError] = useState("");


  /* Available Books */

  const availableBooks = [
    "The Alchemist",
    "Atomic Habits",
    "Clean Code",
    "Harry Potter",
    "Rich Dad Poor Dad",
    "The Psychology of Money",
    "Ikigai",
    "Deep Work",
    "Think and Grow Rich"
  ];


  /* Available Members */

  const availableMembers = [
    "Ambica",
    "Narendra",
    "Lalithya",
    "Panitha",
    "Maheswari",
    "Sai",
    "Rahul",
    "Priya",
    "Kiran",
    "Anjali"
  ];


  /* Issue Book */

  function addTransaction() {

    if (book === "") {
      setError("Please select a book");
      return;
    }

    if (member === "") {
      setError("Please select a member");
      return;
    }


    /* Check if book is already issued */

    const alreadyIssued = transactions.some(
      (transaction) =>
        transaction.book === book &&
        transaction.status === "Issued"
    );

    if (alreadyIssued) {
      setError("This book is already issued");
      return;
    }


    /* Issue Date */

    const issueDate = new Date();


    /* Due Date - 7 Days */

    const dueDate = new Date();

    dueDate.setDate(
      dueDate.getDate() + 7
    );


    /* New Transaction */

    const newTransaction = {

      id: transactions.length + 1,

      book: book,

      member: member,

      date: issueDate
        .toISOString()
        .split("T")[0],

      dueDate: dueDate
        .toISOString()
        .split("T")[0],

      status: "Issued"
    };


    setTransactions([
      ...transactions,
      newTransaction
    ]);


    /* Clear Form */

    setBook("");

    setMember("");

    setError("");

    setShowForm(false);
  }


  /* Return Book */

  function returnBook(id) {

    const updatedTransactions =
      transactions.map(
        (transaction) =>
          transaction.id === id
            ? {
                ...transaction,
                status: "Returned"
              }
            : transaction
      );

    setTransactions(updatedTransactions);
  }


  return (
    <div className="transactions-page">


      {/* Transactions Header */}

      <div className="transactions-header">

        <div>

          <h1>Transactions</h1>

          <p>
            Manage book issue and return transactions
          </p>

        </div>


        {/* Search */}

        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />


        {/* Issue Book Button */}

        <button
          className="add-transaction-btn"
          onClick={() => {

            setShowForm(true);

            setError("");

          }}
        >
          + Issue Book
        </button>

      </div>


      {/* Issue Book Form */}

      {showForm && (

        <div className="transaction-form">

          <h2>Issue Book</h2>


          {/* Book */}

          <label>
            Book
          </label>

          <select
            value={book}
            onChange={(e) =>
              setBook(e.target.value)
            }
          >

            <option value="">
              Select Book
            </option>

            {availableBooks.map(
              (bookName) => (

                <option
                  key={bookName}
                  value={bookName}
                >
                  {bookName}
                </option>

              )
            )}

          </select>


          {/* Member */}

          <label>
            Member
          </label>

          <select
            value={member}
            onChange={(e) =>
              setMember(e.target.value)
            }
          >

            <option value="">
              Select Member
            </option>

            {availableMembers.map(
              (memberName) => (

                <option
                  key={memberName}
                  value={memberName}
                >
                  {memberName}
                </option>

              )
            )}

          </select>


          {/* Error */}

          {error && (

            <p className="transaction-error">
              {error}
            </p>

          )}


          {/* Issue Button */}

          <button
            onClick={addTransaction}
          >
            Issue Book
          </button>

        </div>

      )}


      {/* Transactions List */}

      <div className="transactions-list">

        {transactions

          .filter((transaction) =>

            transaction.book
              .toLowerCase()
              .includes(
                search.toLowerCase()
              )

            ||

            transaction.member
              .toLowerCase()
              .includes(
                search.toLowerCase()
              )

          )

          .map((transaction) => (

            <div
              className="transaction-card"
              key={transaction.id}
            >


              {/* Book */}

              <h3>
                {transaction.book}
              </h3>


              {/* Member */}

              <p>
                Member: {transaction.member}
              </p>


              {/* Issue Date */}

              <p>
                Date: {transaction.date}
              </p>


              {/* Due Date */}

              <p>
                Due Date:{" "}
                {transaction.dueDate}
              </p>


              {/* Status */}

              <p>
                Status:{" "}
                {transaction.status}
              </p>


              {/* Return Button */}

              {transaction.status ===
                "Issued" && (

                <button
                  onClick={() =>
                    returnBook(
                      transaction.id
                    )
                  }
                >
                  Return Book
                </button>

              )}

            </div>

          ))}

      </div>

    </div>
  );
}

export default Transaction;