import { TOrder } from "@/Types/Global";
import { createSlice, current } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

type TInitialSate = {
  order: TOrder[];
  priceOfTotalSelectedProducts: number;
  selectedProducts: number;
};

const initialState: TInitialSate = {
  order: [],
  priceOfTotalSelectedProducts: 0,
  selectedProducts: 0,
};

type YourActionType = {
  payload: any;
  type: string;
};

const orderD = (state: TInitialSate) => {
  state.priceOfTotalSelectedProducts = totalPrice(state);
  state.selectedProducts = totalQuantity(state);
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToOrder: (state: any, action) => {
      const isExist = state.order.find((item: any) => {
        return item.productId === action.payload.order.productId;
      });

      if (!isExist) {
        state.order.push({ ...action.payload.order, quantity: 1 });
      }
      orderD(state);
    },
    updateQuantity: (state: any, action) => {
      const products = state?.order.map((product: any) => {
        if (product.productId === action.payload.id) {
          if (action.payload.type === "increment") {
            product.quantity += 1;
          }
          if (action.payload.type === "decrement") {
            product.quantity -= 1;
          }
        }
        return product;
      });
      state.order = products.filter((product: any) => product.quantity > 0);
      orderD(state);
    },

    removeFromOrder: (state, action) => {
      state.order = state.order.filter(
        (product) => product.productId !== action.payload
      );
      orderD(state);
    },

    clearToOrder: (state, action) => {
      state.order = [];
      orderD(state);
    },
  },
});

const persistConfig = {
  key: "root",
  storage,
};

export const orderPersistSlice = persistReducer(
  persistConfig,
  orderSlice.reducer
);

export const totalQuantity = (state: any) => {
  return state?.order?.reduce((total: number, item: any) => {
    return Number(total + item.quantity);
  }, 0);
};
export const totalPrice = (state: any) => {
  return state?.order?.reduce((total: number, item: any) => {
    return Number(total + item.price * item.quantity);
  }, 0);
};

export const { addToOrder, clearToOrder, updateQuantity, removeFromOrder } =
  orderSlice.actions;
export default orderSlice.reducer;
