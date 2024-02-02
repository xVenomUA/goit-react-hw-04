import { Toaster } from "react-hot-toast";
const toastOptions = {
  error: {
    duration: 3000,
    style: {
      background: "red",
      color: "white",
      padding: "15px",
      width: "300px",
    },
  },
  success: {
    duration: 3000,
    style: {
      background: "green",
      color: "white",
      padding: "15px",
      top: "200px",
      right: "20px",
      width: "250px",
    },
  },
};
const containeStyle = {
  top: 75,
  right: 20,
};

export const ReactAlarm = () => (
  <Toaster
    position="top-right"
    toastOptions={toastOptions}
    containerStyle={containeStyle}
  />
);
