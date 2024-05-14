
const CardIcon = ({ Icon }: { Icon: any }) => {
  return (
    <div>
      <Icon
        size={30}
        className=" w-12 h-12 flex justify-center items-center rounded-full p-4 shadow-2xl bg-[#ffffff] hover:bg-[#a2e233] hover:text-white font-bold duration-500"
      />
    </div>
  );
};

export default CardIcon;
