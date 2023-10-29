"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Page = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("https://dummyjson.com/products");
        if (!result.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await result.json();
        console.log(data.products);
        setdata(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {data.map((items, i) => (
        <div key={i} className="rounded-md border">
          <img
            src={items.thumbnail}
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
              {items.title}
            </h1>
            <p className="mt-3 text-sm text-gray-600">{items.description}</p>
            <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                {items.category}
              </span>
            </div>
            <div className="mt-5 flex items-center space-x-2">
              <span className="block text-sm font-semibold">Price : </span>
              <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                {items.price}
              </span>
            </div>
            <Link
              href={`${items.id}`}
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Buy
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
