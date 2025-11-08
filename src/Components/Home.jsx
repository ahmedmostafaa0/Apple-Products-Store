import { items } from "../data";

const Home = ({onNavigate}) => {
  return (
    <div className="w-full h-full bg-gray-50 grid grid-cols-2 grid-rows-2 gap-4">
      {items.map((items, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center bg-white"
          onClick={() => onNavigate(items.pageIndex)}
        >
          <span className="text-2xl font-bold bg-linear-to-b from-red-500 to-yellow-300 bg-clip-text text-transparent tracking-wide">
            {items.label}
          </span>
          <img src={items.img} alt={items.label} className="max-w-[65%] max-h-[65%] object-contain" draggable='false' />
        </div>
      ))}
    </div>
  );
};

export default Home;
