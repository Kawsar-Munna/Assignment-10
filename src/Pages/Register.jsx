import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { toast } from "react-toastify";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", photoURL: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValidPassword = (password) => {
    return (
      /[A-Z]/.test(password) && // at least one uppercase
      /[a-z]/.test(password) && // at least one lowercase
      password.length >= 6
    );
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!isValidPassword(form.password)) {
      toast.error("Password must be at least 6 characters and include uppercase and lowercase letters.");
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await updateProfile(result.user, {
        displayName: form.name,
        photoURL: form.photoURL
      });
      toast.success("Registration successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
      toast.success("Social login successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-200 via-purple-200 to-pink-200 flex items-center justify-center px-4 ">
      <div className="bg-white shadow-2xl rounded-xl p-8 md:p-12 max-w-md w-full mt-16">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">Create Account</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            value={form.photoURL}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">Or register with</div>

        <div className="flex flex-col md:flex-row gap-4 mt-3">
          <button
            onClick={() => handleSocialLogin(googleProvider)}
            className="flex items-center justify-center w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
            Google
          </button>

          <button
            onClick={() => handleSocialLogin(githubProvider)}
            className="flex items-center justify-center w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            <img src="https://www.svgrepo.com/show/475654/github-color.svg" alt="GitHub" className="w-5 h-5 mr-2" />
            GitHub
          </button>
        </div>

        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
