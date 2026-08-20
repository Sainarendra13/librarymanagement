import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import Members from "./pages/Members";
import Transaction from "./pages/Transaction";
import Register from "./pages/Register";

function App() {

  /* Transactions */

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      book: "The Alchemist",
      member: "Ambica",
      date: "2026-08-15",
      dueDate: "2026-08-22",
      status: "Issued"
    },
    {
      id: 2,
      book: "Atomic Habits",
      member: "Narendra",
      date: "2026-08-16",
      dueDate: "2026-08-23",
      status: "Issued"
    },
    {
      id: 3,
      book: "Clean Code",
      member: "Lalithya",
      date: "2026-08-17",
      dueDate: "2026-08-24",
      status: "Issued"
    }
  ]);


  /* Books */

  const [books] = useState([
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Fiction"
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self Help"
    },
    {
      id: 3,
      title: "Clean Code",
      author: "Robert Martin",
      category: "Programming"
    },
    {
      id: 4,
      title: "Harry Potter",
      author: "J.K. Rowling",
      category: "Fantasy"
    },
    {
      id: 5,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      category: "Finance"
    },
    {
      id: 6,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      category: "Finance"
    },
    {
      id: 7,
      title: "Ikigai",
      author: "Hector Garcia",
      category: "Self Help"
    },
    {
      id: 8,
      title: "Deep Work",
      author: "Cal Newport",
      category: "Productivity"
    },
    {
      id: 9,
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      category: "Self Help"
    }
  ]);


  /* Members */

  const [members] = useState([
    {
      id: 1,
      name: "Ambica",
      email: "ambica@gmail.com",
      phone: "9876543210"
    },
    {
      id: 2,
      name: "Narendra",
      email: "narendra@gmail.com",
      phone: "9876543211"
    },
    {
      id: 3,
      name: "Lalithya",
      email: "lalithya@gmail.com",
      phone: "9876543212"
    },
    {
      id: 4,
      name: "Panitha",
      email: "panitha@gmail.com",
      phone: "9876543213"
    },
    {
      id: 5,
      name: "Maheswari",
      email: "maheswari@gmail.com",
      phone: "9876543214"
    },
    {
      id: 6,
      name: "Sai",
      email: "sai@gmail.com",
      phone: "9876543215"
    },
    {
      id: 7,
      name: "Rahul",
      email: "rahul@gmail.com",
      phone: "9876543216"
    },
    {
      id: 8,
      name: "Priya",
      email: "priya@gmail.com",
      phone: "9876543217"
    },
    {
      id: 9,
      name: "Kiran",
      email: "kiran@gmail.com",
      phone: "9876543218"
    },
    {
      id: 10,
      name: "Anjali",
      email: "anjali@gmail.com",
      phone: "9876543219"
    }
  ]);


  return (
    <BrowserRouter>

      <Routes>

        {/* Login */}

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />


        {/* Dashboard */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>

              <Navbar />

              <div className="layout">

                <Sidebar />

                <main className="main-content">

                  <Dashboard
                    transactions={transactions}
                    books={books}
                    members={members}
                  />

                </main>

              </div>

            </ProtectedRoute>
          }
        />


        {/* Books */}

        <Route
          path="/books"
          element={
            <ProtectedRoute>

              <Navbar />

              <div className="layout">

                <Sidebar />

                <main className="main-content">

                  <Books />

                </main>

              </div>

            </ProtectedRoute>
          }
        />


        {/* Members */}

        <Route
          path="/members"
          element={
            <ProtectedRoute>

              <Navbar />

              <div className="layout">

                <Sidebar />

                <main className="main-content">

                  <Members />

                </main>

              </div>

            </ProtectedRoute>
          }
        />


        {/* Transactions */}

        <Route
          path="/transactions"
          element={
            <ProtectedRoute>

              <Navbar />

              <div className="layout">

                <Sidebar />

                <main className="main-content">

                  <Transaction
                    transactions={transactions}
                    setTransactions={setTransactions}
                  />

                </main>

              </div>

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;