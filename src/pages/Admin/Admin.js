import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./admin.css";

const Admin = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [carItems, setCarItems] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  // Form state for adding new user
  const [newUser, setNewUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  // Form state for adding new car item
  const [newCarItem, setNewCarItem] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
  });

  const [userName, setUserName] = useState("");

  // Fetch all users, car items, and bookings on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/users");
        setUsers(response.data);
      } catch (error) {
        setError(error);
      }
    };

    const fetchCarItems = async () => {
      try {
        const response = await axios.get("http://localhost:8080/carsAll/items");
        setCarItems(response.data);
      } catch (error) {
        setError(error);
      }
    };

    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/bookings/details"
        );
        setBookings(response.data);
      } catch (error) {
        setError(error);
      }
    };

    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setUserName(storedEmail);
    }

    fetchUsers();
    fetchCarItems();
    fetchBookings();
  }, []);

  // Handle user deletion
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      setError(error);
    }
  };

  // Handle car item deletion
  const deleteCarItem = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/carsAll/items/${id}`);
      setCarItems(carItems.filter((item) => item.id !== id));
    } catch (error) {
      setError(error);
    }
  };

  // Handle booking deletion
  const deleteBooking = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/bookings/${id}`);
      setBookings(bookings.filter((booking) => booking.id !== id));
    } catch (error) {
      setError(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("email"); // Remove user email upon logout
    setUserName("");
    navigate("/");
  };

  // Handle form submission for adding a new car item
  const addCarItem = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8081/carsAll/items",
        newCarItem
      );
      setCarItems([...carItems, response.data]);
      setNewCarItem({ name: "", category: "", description: "", price: "" }); // Reset form fields
    } catch (error) {
      setError(error);
    }
  };

  // Handle form submission for adding a new booking

  return (
    <div className="admin-body">
      <header>
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <div className="manage">
        <h2>Car List</h2>
        <div className="car-manage">
          {/* Form for adding a new car item */}
          <div className="addcar">
            <form className="formdat" onSubmit={addCarItem}>
              <h2>Add Car Item</h2>

              <div className="input-box">
                <input
                  type="text"
                  placeholder="Name"
                  value={newCarItem.name}
                  onChange={(e) =>
                    setNewCarItem({ ...newCarItem, name: e.target.value })
                  }
                />
              </div>

              <div className="input-box">
                <input
                  type="text"
                  placeholder="Category"
                  value={newCarItem.category}
                  onChange={(e) =>
                    setNewCarItem({ ...newCarItem, category: e.target.value })
                  }
                />
              </div>

              <div className="input-box">
                <input
                  type="text"
                  placeholder="Description"
                  value={newCarItem.description}
                  onChange={(e) =>
                    setNewCarItem({
                      ...newCarItem,
                      description: e.target.value,
                    })
                  }
                />
              </div>

              <div className="input-box">
                <input
                  type="text"
                  placeholder="Price"
                  value={newCarItem.price}
                  onChange={(e) =>
                    setNewCarItem({ ...newCarItem, price: e.target.value })
                  }
                />
              </div>
              <button type="submit">Add Car</button>
            </form>
          </div>
          {/* Display list of car items */}
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Description</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {carItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.description}</td>
                  <td>${item.price}</td>
                  <td>
                    {/* Button for deleting car item */}
                    <button onClick={() => deleteCarItem(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>User List</h2>
        <div className="user-manage">
          {/* Display list of users */}
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Fname</th>
                <th>Lname</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.user_fname}</td>
                  <td>{user.user_lname}</td>
                  <td>{user.email}</td>
                  <td>
                    {/* Button for deleting user */}
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Test Drive List</h2>
        <div className="test-manage">
          {/* Display list of bookings */}
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Car</th>
                <th>Date</th>
                <th>Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.id}</td>
                  <td>{booking.name}</td>
                  <td>{booking.email}</td>
                  <td>{booking.phone}</td>
                  <td>{booking.car}</td>
                  <td>{booking.date}</td>
                  <td>{booking.time}</td>
                  <td>
                    {/* Button for deleting booking */}
                    <button onClick={() => deleteBooking(booking.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Form for adding a new booking */}
        </div>
      </div>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default Admin;
