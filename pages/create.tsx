import React, { useState } from "react";

import { useForm } from "react-hook-form";

const Draft: React.FC = () => {
  const [use, setUser] = useState();
  const { register, handleSubmit } = useForm();

  const onSubmitForm = async ({
    bio,
    email,
    facebook,
    instagram,
    name,
    phone,
    slug,
    twitter,
  }:any) => {

    try {
      await fetch(`http://localhost:3000/api/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bio,
          email,
          facebook,
          instagram,
          name,
          phone,
          slug,
          twitter,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };
  console.log(use);

  /**
bio: "see"
facebook: "edfefeaf"
instagram: "ders"
name: "Kumar Deepanshu"
phone: "08873630016"
slug: "test"
twitter: "fvevef" 


**/

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900">
        Create your profile
      </h1>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <input
          type="text"
          className="w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3"
          placeholder="Enter your name"
          {...register("name", { required: true })}
        />
        <input
          type="text"
          className="w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3"
          placeholder="Enter your unique profile URL"
          {...register("slug", { required: true })}
        />
        <textarea
          {...register("bio", { required: true })}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-2 mt-3"
          placeholder="A little bit about you"
          rows={4}
        />
        <input
          type="text"
          className="w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3"
          placeholder="Enter your phone number"
          {...register("phone")}
        />
        <input
          type="text"
          className="w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3"
          placeholder="Enter your Twitter link"
          {...register("twitter")}
        />
        <input
          type="text"
          className="w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3"
          placeholder="Enter your Facebook link"
          {...register("facebook")}
        />
        <input
          type="text"
          className="w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3"
          placeholder="Enter your Instagram link"
          {...register("instagram")}
        />
        <button
          type="submit"
          className="bg-indigo-700 text-white rounded-md px-4 py-2 hover:bg-indigo-600 mt-4"
        >
          Create Profile
        </button>
      </form>
    </div>
  );
};

export default Draft;
