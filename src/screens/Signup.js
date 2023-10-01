import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; // Import the shared CSS file for styling

function Signup() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("https://to-do-backend-e1cu.onrender.com/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("User already exists");
          } else if (res.data === "notexist") {
            history("/home", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("Wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <h1>ListCheckr</h1>
      <div className="login-table">
        <div className="login">
          {" "}
          {/* Use the same class for consistent styling */}
          <h1>Signup</h1>
          <form onSubmit={submit}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label>Email:</label>
                  </td>
                  <td>
                    <input
                      type="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      placeholder="Email"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Password:</label>
                  </td>
                  <td>
                    <input
                      type="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder="Password"
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <input type="submit" value="Signup" />
          </form>
          <br />
          <br />
          <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
