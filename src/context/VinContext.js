import { createContext, useReducer } from "react";

const VinContext = createContext({
  vin: "",
  vehicleData: [],
  dispatchVIN: () => {},
  loading: false,
});

const initialVIN = {
  vin: "",
  vehicleData: [],
};

const vinReducer = (state, action) => {
  switch (action.type) {
    case "update-vin":
      return { ...state, vin: action.value };
    case "update-vehicleData":
      return { ...state, vehicleData: action.value};
    case "set-loading-state":
      return {...state, loading: action.value}
    case "reset":
      return { ...state, vin: "", vehicleData: [] };
    default:
      return state;
  }
};

const VinProvider = ({ children }) => {
  const [vin, dispatchVIN] = useReducer(vinReducer, initialVIN);
  return (
    <VinContext.Provider value={{ ...vin, dispatchVIN }}>
      {children}
    </VinContext.Provider>
  );
};

export { VinContext, VinProvider };
