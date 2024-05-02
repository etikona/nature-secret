import React from "react";
import { Controller, useForm } from "react-hook-form";
import ReactSelect from "react-select";
// import ReactSelect from "react-select";

const Payment = () => {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // data.productId = id
    fetch("http://localhost:5000/api/v1/payment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
  };
  return (
    <div>
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="card shrink-0 w-full max-w-sm      shadow-2xl">
          {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body bodyText"
          >
            {/* register your input into the hook by invoking the "register" function */}
            <div>
              <label className="label">
                <span className="label-text text-lg bodyText">Name</span>
              </label>
              <input
                className="input input-bordered w-full bg-slate-300 text-green-800 font-bold"
                {...register("name", { required: true })}
              />
            </div>

            <div className="flex gap-2">
              {/* include validation with required or other standard HTML validation rules */}
              <div>
                <label className="label">
                  <span className="label-text text-lg bodyText">Price</span>
                </label>

                <input
                  className="input input-bordered w-full bg-slate-300 text-green-800 font-bold"
                  {...register("currency", { required: true })}
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-lg bodyText">Phone</span>
                </label>
                <input
                  className="input input-bordered w-full bg-slate-300 text-green-800 font-bold"
                  {...register("cus_phone", { required: true })}
                />
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-lg bodyText">Email</span>
              </label>
              <input
                className="input input-bordered w-full bg-slate-300 text-green-800 font-bold"
                defaultValue="test"
                {...register("email")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-lg bodyText">Location</span>
              </label>
              <input
                className="input input-bordered w-full bg-slate-300 text-green-800 font-bold"
                {...register("Location", { required: true })}
              />
            </div>

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input
              type="submit"
              value="PAY"
              className=" rounded-xl mt-5 font-bold cursor-pointer btn btn-outline btn-success"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
