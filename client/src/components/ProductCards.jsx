import React from "react";

const ProductCards = () => {
  const products = [
    {
      id: 1,
      name: ".In with the new",
      url: "https://www.designinfo.in/wp-content/uploads/2023/01/Apple-iPhone-14-Pro-Mobile-Phone-493177786-i-4-1200Wx1200H-485x485-optimized.jpeg",
      description: " this is brand new phone",
      button:"Add to card"
    },
    {
        id: 1,
        name: "Products",
        url: "https://www.designinfo.in/wp-content/uploads/2023/01/Apple-iPhone-14-Pro-Mobile-Phone-493177786-i-4-1200Wx1200H-485x485-optimized.jpeg",
        description: " this is brand new phone",
        button :"Add to cart"
      },
  ];
  return (
    <div>
      <h1 className=" mt-48 text-center text-3xl font-bold ">Products</h1>
      <div className="flex flex-row">
        {products.map((itm) => (
          <div key={itm.id}className="m-10  w-1/6 relative pb-1 box-content h-[25rem] w-60 rounded-2xl shadow-lg shadow-slate-600 border-2 ">     
          <div className="m-3">
          <h1 className="p-4 text-xl font-semibold  mt-6">{itm.name}</h1>
            <img src={itm.url} />
            <p className=" text-center ">{itm.description}</p>
            <div className="flex justify-center items-center ">
            <button className=  "bg-gray-300 hover:bg-slate-500 p-3 rounded-lg m-2">{itm.button}</button>
               </div>
            </div>
          </div>
        ))}

        <div className="m-10 pb-1 box-content h-[25rem] w-60 rounded-2xl shadow-lg shadow-slate-600 border-2 ">
          heloo
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
