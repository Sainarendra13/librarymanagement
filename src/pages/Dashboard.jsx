function Dashboard({ transactions, books, members }) {

  const issuedBooks = transactions.filter(
    (transaction) => transaction.status === "Issued"
  ).length;

  return (
    <div className="dashboard">

      {/* Dashboard Header */}

      <div className="dashboard-header">

        <h1>Dashboard</h1>

        <p>
          Welcome to the Library Management System
        </p>

      </div>


      {/* Dashboard Statistics */}

      <div className="stats-container">

        <div className="stat-card">
          <h3>Total Books</h3>
          <h2>{books.length}</h2>
        </div>


        <div className="stat-card">
          <h3>Total Members</h3>
          <h2>{members.length}</h2>
        </div>


        <div className="stat-card">
          <h3>Issued Books</h3>
          <h2>{issuedBooks}</h2>
        </div>


        <div className="stat-card">
          <h3>Overdue Books</h3>
          <h2>0</h2>
        </div>

      </div>


      {/* Recent Transactions */}

      <div className="recent-section">

        <h2>Recent Transactions</h2>

        <div className="recent-list">

          {transactions
            .slice()
            .reverse()
            .slice(0, 5)
            .map((transaction) => (

              <div
                className="recent-item"
                key={transaction.id}
              >

                <div>

                  <h3>
                    {transaction.book}
                  </h3>

                  <p>
                    Member: {transaction.member}
                  </p>

                  <p>
                    Date: {transaction.date}
                  </p>

                </div>


                <span
                  className={
                    transaction.status === "Issued"
                      ? "status-issued"
                      : "status-returned"
                  }
                >
                  {transaction.status}
                </span>

              </div>

            ))}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;