import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginBg from "../assets/images/login-bg.jpg";
import { validateEmail } from "../components/utils/validators.js";
import Swal from "sweetalert2";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [generalError, setGeneralError] = useState("");
    const [loading, setLoading] = useState(false);

    // Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

    // Email & password Validation

    const emailError = validateEmail(email);
    const passwordError = !password ? "Password is required" : "";
    setErrors({ email: emailError, password: passwordError });

    if (emailError || passwordError) return;

    setLoading(true);
    setGeneralError("");

    try {
      const res = await fetch(`${backendUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");
    
      Swal.fire({
        position: 'top',
        showConfirmButton: false,
        allowOutsideClick: false,
        background: 'rgba(255, 255, 255, 0.1)',
        backdrop: 'rgba(0,0,0,0.2)',
        width: '420',
        padding: '1rem',
        timer: 1500,
        // timerProgressBar: true,
        html: `
            <div class="flex flex-col items-center justify-center">
                <p class="text-white text-center font-semibold text-lg">Login Successful!</p>
                <p class="text-white text-center text-sm">Welcome back!</p>
            </div>
        `
        }).then(() => {
        navigate("/");
        });

    } catch (error) {
      setGeneralError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center p-6 bg-center bg-cover after:content:'' after:absolute after:inset-0 after:backdrop-blur-sm after:bg-white/10"
      style={{ backgroundImage: `url(${loginBg})` }}
    >

      <div className="absolute z-50 w-full max-w-md">
        <div className="bg-white/30 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-8">

          <h1 className="text-2xl font-semibold text-white mb-6 text-center">
            Welcome back
          </h1>

          {generalError && (
            <p className="text-red-400 text-sm mb-2">{generalError}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email */}
            <label className="block">
              <span className="text-sm text-white">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({
                    ...prev,
                    email: validateEmail(e.target.value),
                  }));
                }}
                className="mt-1 block w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </label>

            {/* Password */}
            <label className="block">
              <span className="text-sm text-white">Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors((prev) => ({
                    ...prev,
                    password: e.target.value ? "" : "Password is required",
                  }));
                }}
                className="mt-1 block w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="text-red-400 text-xs mt-1">{errors.password}</p>
              )}
            </label>

            {/* Login */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 px-4 py-2 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-200 transition disabled:opacity-60 disabled:cursor-not-allowed hover:cursor-pointer"
            >
              {loading ? "Logging in..." : "Log in"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-white">
            Don't have an account?{" "}
            <a href="/signup" className="font-semibold underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
