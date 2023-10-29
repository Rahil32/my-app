"use client";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [data, setdata] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `https://dummyjson.com/products/${params.id}`
        );
        if (!result.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await result.json();
        console.log(data);
        setdata(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params]);

  return (
    <section className="overflow-hidden">{
      data ? (<div className="mx-auto max-w-5xl px-5 py-24">
      <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
        <img
          alt="Nike Air Max 21A"
          className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
          src={data.thumbnail}
        />
        <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
          <h2 className="text-sm font-semibold tracking-widest text-gray-500">
            {data.brand}
          </h2>
          <h1 className="my-4 text-3xl font-semibold text-black">
            {data.title}
          </h1>
          <p className="leading-relaxed">
          {data.description}
          </p>
          <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
          </div>
          <div className="flex items-center justify-between">
            <span className="title-font text-xl font-bold text-gray-900">
            ₹{data.price}
            </span>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>) : ("Loading...") 
    }
      
    </section>
  );
};
export default Page;
