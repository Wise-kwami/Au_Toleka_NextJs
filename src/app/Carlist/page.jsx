import Header from "@components/Header";
import  React  from "react";
const Carlist = () => {
  return (
    <div className=" container mx-auto flex flex-col">
      <Header />
      <div className="list-cars flex flex-col ">
        <h1 className="text-center mb-10 text-5xl font-bold">
          Select a vehicule group
        </h1>
        {/* <FilterCar></FilterCar>
        <CarCard></CarCard> */}
      </div>
    </div>
  );
};

export default Carlist;
