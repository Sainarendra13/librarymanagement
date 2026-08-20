import { useState } from "react";

function Members() {

  const [members, setMembers] = useState([
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
 
]);

  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [error, setError] = useState("");

  const [editId, setEditId] = useState(null);

  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPhone, setEditPhone] = useState("");

  const [editError, setEditError] = useState("");


  /* Add Member */

  function addMember() {

    if (name.trim() === "") {
      setError("Name is required");
      return;
    }

    if (email.trim() === "") {
      setError("Email is required");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Enter a valid email");
      return;
    }

    if (phone.trim() === "") {
      setError("Phone number is required");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      setError("Phone number must contain 10 digits");
      return;
    }

    const emailExists = members.some(
      (member) =>
        member.email.toLowerCase() === email.toLowerCase()
    );

    if (emailExists) {
      setError("Email already exists");
      return;
    }

    const newMember = {
      id: members.length + 1,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim()
    };

    setMembers([...members, newMember]);

    setName("");
    setEmail("");
    setPhone("");
    setError("");
    setShowForm(false);
  }


  /* Delete Member */

  function deleteMember(id) {

    const updatedMembers = members.filter(
      (member) => member.id !== id
    );

    setMembers(updatedMembers);
  }


  /* Start Editing */

  function editMember(member) {

    setEditId(member.id);

    setEditName(member.name);
    setEditEmail(member.email);
    setEditPhone(member.phone);

    setEditError("");
  }


  /* Save Edited Member */

  function saveEdit(id) {

    if (editName.trim() === "") {
      setEditError("Name is required");
      return;
    }

    if (editEmail.trim() === "") {
      setEditError("Email is required");
      return;
    }

    if (
      !editEmail.includes("@") ||
      !editEmail.includes(".")
    ) {
      setEditError("Enter a valid email");
      return;
    }

    if (editPhone.trim() === "") {
      setEditError("Phone number is required");
      return;
    }

    if (!/^[0-9]{10}$/.test(editPhone)) {
      setEditError("Phone number must contain 10 digits");
      return;
    }

    const emailExists = members.some(
      (member) =>
        member.id !== id &&
        member.email.toLowerCase() ===
          editEmail.toLowerCase()
    );

    if (emailExists) {
      setEditError("Email already exists");
      return;
    }

    const updatedMembers = members.map(
      (member) =>
        member.id === id
          ? {
              ...member,
              name: editName.trim(),
              email: editEmail.trim(),
              phone: editPhone.trim()
            }
          : member
    );

    setMembers(updatedMembers);

    setEditId(null);

    setEditName("");
    setEditEmail("");
    setEditPhone("");
    setEditError("");
  }


  /* Cancel Edit */

  function cancelEdit() {

    setEditId(null);

    setEditName("");
    setEditEmail("");
    setEditPhone("");
    setEditError("");
  }


  return (
    <div className="members-page">

      <div className="members-header">

        {/* Search */}

        <input
          type="text"
          placeholder="Search members..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />


        {/* Add Member Form */}

        {showForm && (

          <div className="member-form">

            <h2>Add New Member</h2>

            <input
              type="text"
              placeholder="Member name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            {error && (
              <p className="member-error">
                {error}
              </p>
            )}

            <button onClick={addMember}>
              Add Member
            </button>

          </div>

        )}


        {/* Members List */}

        <div className="members-list">

          {members
            .filter((member) =>
              member.name
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .map((member) => (

              <div
                className="member-card"
                key={member.id}
              >

                {editId === member.id ? (

                  <>
                    <h3>Edit Member</h3>

                    <input
                      type="text"
                      value={editName}
                      onChange={(e) =>
                        setEditName(e.target.value)
                      }
                    />

                    <input
                      type="email"
                      value={editEmail}
                      onChange={(e) =>
                        setEditEmail(e.target.value)
                      }
                    />

                    <input
                      type="text"
                      value={editPhone}
                      onChange={(e) =>
                        setEditPhone(e.target.value)
                      }
                    />

                    {editError && (
                      <p className="member-error">
                        {editError}
                      </p>
                    )}

                    <button
                      onClick={() =>
                        saveEdit(member.id)
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
                    <h3>{member.name}</h3>

                    <p>
                      Email: {member.email}
                    </p>

                    <p>
                      Phone: {member.phone}
                    </p>

                    <button
                      onClick={() =>
                        editMember(member)
                      }
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        deleteMember(member.id)
                      }
                    >
                      Delete
                    </button>
                  </>

                )}

              </div>

            ))}

        </div>


        {/* Page Heading */}

        <div>

          <h1>Members</h1>

          <p>
            Manage library members
          </p>

        </div>


        {/* Add Member Button */}

        <button
          className="add-member-btn"
          onClick={() => {
            setShowForm(true);
            setError("");
          }}
        >
          + Add Member
        </button>

      </div>

    </div>
  );
}

export default Members;