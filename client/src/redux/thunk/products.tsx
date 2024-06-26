import { AppDispatch } from "../store";
import { productActions } from "../slices/product";
import { productDetailActions } from "../slices/productDetail";

export function fetchProductData() {
  const productUrl = "https://afrospicebe.onrender.com/products";
  return async (dispatch: AppDispatch) => {
    // axios or fetch
    const response = await fetch(productUrl);
    const productData = await response.json();
    dispatch(productActions.getProductData(productData));
  };
}

export const fetchProductDetail = (productId: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const productDetailurl = `https://afrospicebe.onrender.com/products/${productId}`;

      // Fetch data from the backend server
      const response = await fetch(productDetailurl);

      // Check if the response status is OK
      if (!response.ok) {
        throw new Error("Failed to fetch product details");
      }

      // Parse the response data
      const productDetailData = await response.json();

      // Dispatch action to update the Redux store with the fetched product details
      dispatch(productDetailActions.GetProductDetail(productDetailData));
    } catch (error) {
      console.error("Error fetching product details:", error);
      // Optionally dispatch an error action to handle the error state in the Redux store
    }
  };
};


