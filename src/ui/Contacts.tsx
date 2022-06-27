import React from "react";
import { Button } from "./Button";

export const Contacts = () => {
  return (
    <div className="bg-lightGray py-20">
      <h4 className="text-darkFont text-3xl text-center">CONTACT</h4>

      <form className="max-w-xl mx-auto mt-4 px-2">
        <div className="flex flex-col md:flex-row justify-between gap-2">
          <div className="md:flex-1 flex flex-col">
            <input
              className="bg-lightGray border-b-2 border-darkFont"
              type="text"
              id="name"
              required
            />
            <label htmlFor="name" className="text-gray mt-2">
              Name *
            </label>
          </div>
          <div className="md:flex-1 flex flex-col">
            <input
              className="bg-lightGray border-b-2 border-darkFont"
              type="email"
              id="email"
              required
            />
            <label htmlFor="email" className="text-gray mt-2">
              Email *
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <input
            className="bg-lightGray border-b-2 border-darkFont"
            type="text"
            id="message"
            required
          />
          <label htmlFor="message" className="text-gray mt-2">
            Message...
          </label>
        </div>

        <hr className="mt-24" />

        <div className="mx-auto w-fit mt-4">
          <Button outline>Submit</Button>
        </div>
      </form>
    </div>
  );
};
