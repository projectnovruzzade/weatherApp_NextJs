"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [inputData, setInputData] = useState("");
  const router = useRouter();
  
  useEffect(() => {
    console.log(router)
  })

  const handlerSetData = () => {
    router.push(`?search=${inputData}`);
  };

  return (
    <div className="input-content w-96 flex">
      <input
        type="text"
        onChange={(e) => setInputData(e.target.value)}
        value={inputData}
        placeholder="Enter you Country.."
        className="py-3 rounded-md w-full border-2 text-black font-semibold p-2 border-white outline-none focus:border-blue-600 focus:border-2 transition-all"
      />
      <button
        onClick={handlerSetData}
        className="py-2 px-3 bg-orange-600 ml-3 rounded font-semibold text-yellow-50"
      >
        Sent
      </button>
    </div>
  );
};

export default SearchBar;
