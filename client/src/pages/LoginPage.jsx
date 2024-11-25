import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signIn(data);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center ">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <h1 className="text-3xl my-2 font-bold">Login</h1>
        {loginErrors.map((error, i) => (
          <div key={i} className="bg-red-500 p-2 text-white text-center my-2">
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-red-500">Password is required</span>
          )}
          <button
            className="bg-sky-500 text-white px-4 py-2 rounded-md my-2"
            type="submit">
            Login
          </button>
        </form>
        <p className="flex gap-x-2 justify-between">
          Don´t have an account?{" "}
          <Link className="text-sky-500" to="/register">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
