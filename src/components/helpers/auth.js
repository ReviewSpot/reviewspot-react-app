import axios from "axios";

const submitRequest = async (operation, options) => {
  try {
    const response = await axios(operation / options);
  } catch (error) {
    if (error.response.status == 401) {
      // do noLongerLoggedIn functionality
    } else {
      throw error; // to be caught in whatever try catch is implemented for the greater method.
    }
  }
};

export const bannedRedirect = (navigate) => {
  const redirectMessage = "Account has been banned by a moderator";
  navigate("/", { state: { redirectMessage } });
  navigate(0);
};
