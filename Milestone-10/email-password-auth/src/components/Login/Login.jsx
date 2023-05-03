import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import app from "../../firebase/firebase.console";
import { Link } from "react-router-dom";

const auth = getAuth(app);
const Login = () => {

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const emailRef = useRef();

    const handleLogin = (event) => {
        event.preventDefault();
        setSuccess("");
        setError("");
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setError("");
              event.target.reset();
              if (!loggedUser.emailVerified) {
                  
              }
            setSuccess("User login successfully");
          })
          .catch((error) => {
            console.error(error.message);
            setError(error.message);
          });
    };

    const handleResetPassword = event => {
        const email = emailRef.current.value;
        if (!email) {
            alert('please provide your email to reset password')
            return;
        }
        sendPasswordResetEmail(auth,email)
            .then(() => {
            alert('please check your email')
            })
            .catch(error => {
            console.log(error);
            setError(error.message)
        })
    }

    return (
      <div>
        <h2>Please Login</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
                        name="email"
                        ref={emailRef}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p>
          <small>
            Forget Password? Please <button onClick={handleResetPassword} className="btn btn-link">Reset Password</button>
          </small>
        </p>
        <p>
          <small>
            New to this website? Please <Link to="/register">Register</Link>
          </small>
        </p>
        <p className="text-danger">{error}</p>
        <p className="text-success">{success}</p>
      </div>
    );
};

export default Login;