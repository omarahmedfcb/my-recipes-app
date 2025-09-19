import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  function myHandleSubmit(data) {
    const registeredAccounts =
      JSON.parse(localStorage.getItem("registered")) || [];
    let item = registeredAccounts.find(
      (ele) => ele.email == data.email || ele.username == data.username
    );
    if (!item) {
      registeredAccounts.push({
        username: data.username,
        email: data.email,
        password: data.password,
      });
      localStorage.setItem("registered", JSON.stringify(registeredAccounts));
      alert("Registered successfully");
      reset();
    } else {
      alert("Username or Email is already registered");
    }
  }
  return (
    <form
      className="p-2 flex flex-col gap-4"
      onSubmit={handleSubmit(myHandleSubmit)}
    >
      <div>
        <label htmlFor="username" className="block">
          Username
        </label>
        <input
          {...register("username", {
            required: "This field is missing",
            pattern: {
              value: /^[^\s@]+$/,
              message: "Username shouldn't contain spaces",
            },
          })}
          className="border-1 border-gray-300 rounded-xl w-full p-1 px-2 outline-red-700"
          type="text"
          id="username"
        />
        {errors.username && (
          <p className="text-red-700">{errors.username.message}</p>
        )}
      </div>
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
            minLength: {
              value: 8,
              message: "Password length must be more than 8 characters",
            },
            pattern: {
              value: /[A-Z]/,
              message: "Password should at least have one uppercase letter",
            },
          })}
          className="border-1 border-gray-300 rounded-xl w-full p-1 px-2 outline-red-700"
          type="password"
          id="password"
        />
        {errors.password && (
          <p className="text-red-700">{errors.password.message}</p>
        )}
      </div>

      <button className="bg-red-700 rounded-xl text-white py-2 cursor-pointer">
        Register
      </button>
    </form>
  );
}

export default Register;
