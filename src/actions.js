import { packer, SortStrategy, SelectionStrategy } from "guillotine-packer";
import { extractGrillItems, packGrillItems } from "./utils/grill.js";

export const UPDATE_GRILL = "@/UPDATE_GRIPP";
export const SET_GRILL_ITEMS = "@/SET_GRILL_ITEMS";
export const SET_OUT_OF_GRILL_ITEMS = "@/SET_OUT_OF_GRILL_ITEMS";
export const SET_GRILL_SIZE = "@/SET_GRILL_SIZE";
export const RESET_GRILL = "@/RESET_GRILL";

export const setGrillItems = (items) => ({
  type: SET_GRILL_ITEMS,
  payload: items
});

export const setOutOfGrillItems = (items) => ({
  type: SET_OUT_OF_GRILL_ITEMS,
  payload: items
});

export const resetGrill = () => ({
  type: RESET_GRILL,
  payload: null
});

export const setGrillSize = (width, height) => ({
  type: SET_GRILL_SIZE,
  payload: [width, height]
});

export const updateGrill = (root) => {
  return async (dispatch) => {
    try {
      const {
        grill: { width = 500, height = 200, grillItems = [] } = {}
      } = root;
      const extractedGrillItems = extractGrillItems(grillItems);
      const [packedItems, notPackedItems] = packGrillItems(width, height, extractedGrillItems)

      dispatch(setGrillSize(width, height));
      dispatch(setGrillItems(packedItems || []));
      dispatch(setOutOfGrillItems(notPackedItems || []));
    } catch (e) {
      console.log("e", e);
    }
  };
};
