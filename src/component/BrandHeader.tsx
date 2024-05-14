const BrandHeader = ({
  category,
  image,
  name,
}: {
  category: string;
  image: string;
  name: string;
}) => {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          width: "100%",
          height: "400px",

          backgroundRepeat: "no-repeat",
        }}
        className=" z-[-1]"
      >
        <div className=" bg-black w-full h-[400px] opacity-80"></div>
      </div>
      <div className=" absolute top-[40%] md:left-0  text-center w-full text-white">
        <div>
          <p className=" text-[15px] font-bold text-[#a2e233]">
            Welcome to our shop
          </p>
          <p className=" z-20 font-semibold text-5xl my-2">{name}</p>
          <p className=" font-bold">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default BrandHeader;
