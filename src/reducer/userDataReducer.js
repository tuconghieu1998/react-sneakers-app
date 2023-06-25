export const userDataReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART": {
      return { ...state, cartProducts: [...action.payload] };
    }

    case "REMOVE_FROM_CART": {
      const productId = action.payload;
      const index = state.cartProducts.findIndex((obj) => obj.id === productId);
      if(index >= 0) {
        state.cartProducts.splice(index, 1);
      }
      return {...state};
    }

    case "SET_QUANTITY_CART_PRODUCT": {
      const product = action.payload;
      const index = state.cartProducts.findIndex((obj) => obj.id === product.id);
      if(index >= 0) {
        state.cartProducts[index].quantity = product.quantity;
      }
      return {...state};
    }

    case "SET_ADDRESS": {
      if(action.payload != undefined) {
        return { ...state, addressList: [...action.payload] };
      }
      return {...state};
    }

    case "SET_WISHLIST": {
      return { ...state, wishlistProducts: [...action.payload] };
    }

    case "REMOVE_ITEM_FROM_WISHLIST": {
      const itemId = action.payload;
      const index = state.wishlistProducts.findIndex((obj) => obj.id === itemId);
      if(index >= 0) {
        state.wishlistProducts.splice(index, 1);
      }
      return {...state};
    }

    case "SET_ORDER": {
      return {
        ...state,
        orderDetails: {
          ...state.orderDetails,
          ...action.payload,
        },
      };
    }

    case "SET_ORDERS": {
      return { ...state, orders: [...state.orders, { ...action.payload }] };
    }

    default:
      return state;
  }
};

export const initialUserData = {
  cartProducts: [],
  wishlistProducts: [],
  addressList: [],
  orders: [],
  orderDetails: {
    cartItemsTotal: "",
    cartItemsDiscountTotal: "",
    couponDiscountTotal: "",
    orderAddress: "",
    orderId: "",
  },
};
