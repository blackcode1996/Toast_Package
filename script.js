import Toast from "./Toast.js"

document.querySelector("button").addEventListener("click", () => {
  const toast = new Toast({
    text: "Hello",
    position: "top-right",
    pauseOnHover: true,
    pauseOnFocusLoss: true,
    MessageType:'success',
  });

//   const messageType = "success";

//   toast.setMessageType(messageType);
//   toast.text = "Your message text here";
});
