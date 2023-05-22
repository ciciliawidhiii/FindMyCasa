import React from "react";
import LogoCasa from "../assets/LogoCasa.png";

export default function Navbar() {
    return (
    <> 
      <nav class=" bg-hijau">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src= {LogoCasa} class= "h-8 mr-3" alt="FindMyCasa Logo" />
        <div class="flex md:order-2">
            <button type="button" class="text-hijau-tua bg-putih-tulang hover:bg-hijau-tua focus:ring-4 focus:outline-none focus:ring-hijau font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-putih-tulang dark:hover:bg-hijau dark:focus:ring-hijau">Looking for Casa?</button>
            <button type="button" class="text-hijau-tua bg-putih-tulang hover:bg-hijau-tua focus:ring-4 focus:outline-none focus:ring-hijau font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-putih-tulang dark:hover:bg-hijau dark:focus:ring-hijau">Ask me Anything</button>
        </div>
        </div>
      </nav>
    </>
  );
}