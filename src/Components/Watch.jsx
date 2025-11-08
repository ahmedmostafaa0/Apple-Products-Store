import { watchModels } from './../data/index';

const Watch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-around bg-white py-8 px-4">
      <h1 className="2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-8">
        Which Apple Watch is right for you?
      </h1>
      <div className="flex justify-around w-full gap-2">
          {watchModels.map((watch, index) => (
            <div key={index} className={`w-60 h-[430px] flex flex-col items-start justify-around ${index === 2 && 'hidden md:flex'}`}>
                <div className="w-full mb-4 overflow-hidden relative group">
                  <img
                    src={watch.imgs[0]}
                    alt={watch.name}
                    className="w-4/5 h-full absolute top-0 left-0 object-contain  opacity-100 group-hover:opacity-0 transition duration-300"
                  />
                  <img
                    src={watch.imgs[1]}
                    alt={watch.name}
                    className="w-4/5 h-full object-contain opacity-0 group-hover:opacity-100 transition duration-300"
                  />
                </div>
                <h3 className="2xl:text-xl xl:text-lg text-sm font-semibold">
                  {watch.name}
                </h3>
                <a href="#" className="my-2 text-base text-blue-400">
                  {watch.price}
                </a>
                <div className="md:text-sm text-xs text-gray-700 my-2">
                  {watch.desc.map((desc, i) => (
                    <span key={i} className="block">{desc}</span>

                  ))}
                </div>
              <button className="cursor-pointer w-min text-sm mt-4 py-1 px-2 bg-blue-400 rounded-full text-white">Buy</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Watch;
