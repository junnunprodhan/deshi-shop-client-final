import axios from "axios";

const IMAGE_KEY = "2819fd66b01102f3c860f69b704f5b23";

const useHostImage = async (image: any) => {
  const IMAGE_URL = `https://api.imgbb.com/1/upload?key=${IMAGE_KEY}`;
  const formData = new FormData();
  formData.append("image", image);
  const response = await axios.post(IMAGE_URL, formData);
  return response.data.data;
};

export default useHostImage;
