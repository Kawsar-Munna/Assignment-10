import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";
import { toast } from "react-toastify";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      toast.success("Logged in successfully!");
      navigate(location.state?.from?.pathname || "/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Google login successful!");
      navigate(location.state?.from?.pathname || "/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGitHubLogin = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      toast.success("GitHub login successful!");
      navigate(location.state?.from?.pathname || "/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 md:p-12 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">Welcome Back!</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">Or login with</div>

        <div className="flex flex-col md:flex-row gap-4 mt-3">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Google
          </button>

          <button
            onClick={handleGitHubLogin}
            className="flex items-center justify-center w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475654/github-color.svg"
              alt="GitHub"
              className="w-5 h-5 mr-2"
            />
            GitHub
          </button>
        </div>

        <p className="text-center text-sm mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-purple-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
