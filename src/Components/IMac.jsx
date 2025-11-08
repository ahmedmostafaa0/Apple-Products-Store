import { useState } from "react";
import { imacModels } from "../data/index";

const IMac = () => {
  const [selectedColor, setSelectedColor] = useState("blue");
  const [visibleLabel, setVisibleLabel] = useState("Blue");

  const getCurrentColor = () =>
    imacModels.find((model) => model.label.toLowerCase() === selectedColor);

  return (
    <div className="h-full grid grid-cols-2 grid-rows-2 md:gap-4 gap-1 bg-white overflow-hidden relative">
      <div className="h-full col-span-1 row-span-2 flex flex-col items-center md:justify-center justify-start pt-8 bg-gray-50">
        <img
          src={getCurrentColor().images.side}
          alt="IMac"
          className="2xl:max-w-3xl lg:max-w-lg"
        />
      </div>
      <div className="bg-gray-50 col-span-1 row-span-1 flex justify-center items-center p-4">
        <img
          src={getCurrentColor().images.front}
          alt="IMac"
          className="2xl:max-w-sm xl:max-w-52 lg:max-w-48"
        />
      </div>
      <div className="bg-gray-50 col-span-1 row-span-1 flex justify-center items-center p-4">
        <img
          src={getCurrentColor().images.back}
          alt="IMac"
          className="2xl:max-w-sm xl:max-w-52 lg:max-w-48"
        />
      </div>
      <div className="absolute md:top-1/2 top-3/4 md:left-4 left-12 transform -translate-y-1/2 flex flex-col space-y-1 lg:space-y-2">
      {imacModels.map((model, index) => (
        <div key={index} className="flex items-center space-x-2">
          <button  onClick={() => {setSelectedColor(model.label.toLowerCase()); setVisibleLabel(model.label)}} style={{backgroundColor: model.bg}} className={`2xl:w-8 md:w-5 w-4 2xl:h-8 md:h-5 h-4 rounded-full ${selectedColor === model.label.toLowerCase() && 'border-2 border-blue-500'}`} />
          {visibleLabel === model.label && <span className="text-sm font-500 text-gray-600">{model.label}</span>}
        </div>
      ))}
        <button className="text-sm mt-4 w-min py-1 px-2 bg-blue-400 rounded-full text-white">
          Shop
        </button>
      </div>
    </div>
  );
};

export default IMac;
