"use client";
import BForm from "@/component/Forms/BForm";
import BSelect from "@/component/Forms/BSelect";
import FileUpload from "@/component/Forms/FileUpload";
import { Input } from "@/component/Forms/Input";
import TextArea from "@/component/Forms/TextArea";
import { Minerals, foodCategories, vitamins } from "@/constanc/constant";
import { useUpProductMutation } from "@/redux/api/productApi";

const Modal = ({ openModal, setOpenModal, product }: any) => {
  const products = { ...product };
  products.nutrients = {};

  products.category = [{ label: product.category, value: product.category }];
  const vitamin = product.nutrients.vitamins
    ? product.nutrients.vitamins.map((item: any) => ({
        label: item,
        value: item,
      }))
    : [];
  const minerals = product.nutrients.minerals
    ? product.nutrients.minerals.map((item: any) => ({
        label: item,
        value: item,
      }))
    : [];
  products.nutrients.vitamins = vitamin;
  products.nutrients.minerals = minerals;
  const [upProduct] = useUpProductMutation();
  const HandleToSubmit = async (e: any) => {
    const id = e?._id;
    const res = await upProduct({ id, data: e });
    console.log(res);
  };

  return (
    <div className=" mx-auto flex items-center justify-center">
      <div
        className={`fixed flex justify-center items-center z-[100] ${
          openModal ? "visible opacity-1" : "invisible opacity-0"
        } duration-300 inset-0 w-full h-full`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute overflow-x-hidden overflow-y-scroll w-full h-full flex justify-center bg-white drop-shadow-2xl rounded-lg ${
            openModal
              ? "translate-y-0 opacity-1 duration-300"
              : "translate-y-32 opacity-0 duration-100"
          }`}
        >
          <main className="px-4 sm:px-6 lg:px-8 py-8 border w-full">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              className="mr-0 mx-auto flex bg-slate-950 text-white px-3 py-2 rounded-lg mb-6"
            >
              Close
            </button>
            <BForm
              onSubmit={HandleToSubmit}
              // resolver={zodResolver(productSchema)}
              defaultValues={products}
            >
              <div className=" grid md:grid-cols-2 grid-cols-1 gap-10">
                <div className=" space-y-3 bg-white shadow-md rounded-lg p-6">
                  <div className=" space-y-2">
                    <label className=" font-semibold" htmlFor="Product Name">
                      Product Name
                    </label>
                    <Input
                      label="Name"
                      name="name"
                      edit=" rounded-md"
                      type="text"
                    />
                  </div>
                  <div className=" space-y-2 text-start">
                    <BSelect
                      options={foodCategories}
                      edit=""
                      name="category"
                      label="Category"
                      multi={false}
                    />
                  </div>
                  <div className=" space-y-2">
                    <BSelect
                      name="nutrients.vitamins"
                      label="Vitamins"
                      edit=""
                      options={vitamins}
                      multi={true}
                    />
                  </div>
                  <div className=" space-y-2">
                    <BSelect
                      name="nutrients.minerals"
                      label="Minerals"
                      edit=""
                      options={Minerals}
                      multi={true}
                    />
                  </div>
                  <div className=" space-y-2">
                    <label className=" font-semibold" htmlFor="Price">
                      Price
                    </label>
                    <Input label="Price" name="price" edit="" type="number" />
                  </div>

                  <div className=" space-y-2">
                    <label className=" font-semibold" htmlFor="Discount Price">
                      Discount Price
                    </label>
                    <Input
                      label="DiscountPrice"
                      name="discountPrice"
                      edit=""
                      type="number"
                    />
                  </div>
                </div>
                <div className=" flex flex-col  bg-white  p-6 space-y-7 shadow-md rounded-lg">
                  <div className=" space-y-2">
                    <label className=" font-semibold" htmlFor="Stock">
                      Stock
                    </label>
                    <Input label="Stock" name="stock" edit="" type="number" />
                  </div>
                  <div className=" space-y-2">
                    <label
                      className=" font-semibold"
                      htmlFor="Discount End Date"
                    >
                      Discount End Date
                    </label>
                    <Input
                      label="DiscountEndDate"
                      name="discountEndDate"
                      edit=" "
                      type="date"
                    />
                  </div>
                  <div>
                    <FileUpload
                      type="file"
                      label="Image"
                      name="image"
                      edit=""
                    />
                  </div>
                  <div>
                    <TextArea
                      edit=""
                      label="Description"
                      name="description"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <button
                className={
                  "uppercase font-bold px-10 bg-black text-white py-2 mt-8"
                }
              >
                Submit
              </button>
            </BForm>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Modal;
