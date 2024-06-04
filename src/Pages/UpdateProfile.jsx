import {  useContext, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const [errorPassMessage, setErrorPassMessage] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const navigate = useNavigate();
    const handleUpdate = async(e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const accept = form.checkbox.checked;
        const user = {name, photoURL, email, password};
        console.log(user);
        setErrorMessage('');
        setErrorPassMessage('');

        if (!/[A-Z]/.test(password)) {
            setErrorPassMessage('Password must contain at least one uppercase letter.');
            return;
        }
        if (!/[a-z]/.test(password)) {
            setErrorPassMessage('Password must contain at least one lowercase letter.');
            return;
        }
        if (password.length < 6) {
            setErrorPassMessage('Password must be at least 6 characters long.');
            return;
        }
        if (password !== confirmPassword) {
            setErrorPassMessage('Passwords do not match.');
            return;
        }
        if (!accept) {
            setErrorMessage('Please Accept Our Terms & Conditions');
            return;
        }

        try {
            await updateProfile(user, {
                displayName: name,
                photoURL: photoURL,
                email: email
            });
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              });
            navigate('/')
            console.log('User profile updated successfully:', user);
        } catch (error) {
            console.error('Error creating user or updating profile:', error);
        }
    }
  return (
    <div>
      <div className="hero">
        <div className="hero-content w-[90%] md:w-[60%] lg:w-[60%]">
          <div className="card shrink-0 w-full shadow-2xl bg-base-100">
            <div>
              <h1 className="text-5xl font-bold mt-5 text-center">Update Your Profile</h1>
            </div>
            <form onSubmit={handleUpdate}  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder={user.displayName}
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder={user.photoURL}
                  name="photoURL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder={user.email}
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              {
                errorPassMessage && <p className="text-red-500 text-md">{errorPassMessage}</p>
              }
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  className="input input-bordered"
                  required
                />
              </div>
              {
                errorPassMessage && <p className="text-red-500 text-md">{errorPassMessage}</p>
              }
              <div>
                <input type="checkbox" name="checkbox" id="" />{" "}
                <label>
                  Accept our{" "}
                  <span className="underline">Terms & Conditions</span>
                </label>
              </div>
              {
                errorMessage && <p className="text-red-500 text-md">{errorMessage}</p>
              }
              <div className="form-control mt-2">
                <button className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
