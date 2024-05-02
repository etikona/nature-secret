import Navbar from "@/components/Navbar";
import React from "react";
import { useForm } from "react-hook-form";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <>
      <Navbar />
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl">
          {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* register your input into the hook by invoking the "register" function */}
            <div>
              <label className="label">
                <span className="label-text text-lg text-white">Email</span>
              </label>
              <input
                className="input input-bordered w-full bg-slate-300 text-green-800 font-bold"
                defaultValue="test"
                {...register("email")}
              />
            </div>

            {/* include validation with required or other standard HTML validation rules */}

            <div>
              <label className="label">
                <span className="label-text text-lg text-white">Password</span>
              </label>
              <input
                className="input input-bordered w-full bg-slate-300 text-green-800 font-bold"
                {...register("password", { required: true })}
              />
            </div>

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input
              className="button rounded-xl mt-5 font-bold cursor-pointer"
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
