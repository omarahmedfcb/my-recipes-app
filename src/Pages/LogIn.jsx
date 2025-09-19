import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loggedIn } from "../Redux/loggedLocalSlice";

function LogIn() {
  const dispatch = useDispatch();

  let [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function myHandleSubmit(data) {
    const registeredAccounts =
      JSON.parse(localStorage.getItem("registered")) || [];
    let item = registeredAccounts.find((ele) => data.email == ele.email);
    if (!item) {
      setNotFound(true);
      return;
    }
    if (item.password != data.password) {
      setNotFound(true);
    } else {
      setNotFound(false);
      dispatch(loggedIn(item.username));
      navigate("/");
    }
  }

  return (
    <form
      className="p-2 flex flex-col gap-4"
      onSubmit={handleSubmit(myHandleSubmit)}
    >
      <div>
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          {...register("email", {
            required: "This field is missing",
            pattern: {
              value: /^[^\s@]+@[\w]+\.[\w]+$/,
              message: "Email is not valid",
            },
          })}
          className="border-1 border-gray-300 rounded-xl w-full p-1 px-2 outline-red-700"
          type="text"
          id="email"
        />
        {errors.email && <p className="text-red-700">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="password" className="block">
          Password
        </label>
        <input
          {...register("password", {
            required: "This field is missing",
          })}
          className="border-1 border-gray-300 rounded-xl w-full p-1 px-2 outline-red-700"
          type="password"
          id="password"
        />
        {errors.password && (
          <p className="text-red-700">{errors.password.message}</p>
        )}
      </div>
      {notFound && (
        <p className="text-red-700">Email or password are invalid</p>
      )}
      <button className="bg-red-700 rounded-xl text-white py-2 cursor-pointer">
        Login
      </button>
    </form>
  );
}

export default LogIn;
