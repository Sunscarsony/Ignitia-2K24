import {Bounce, ToastOptions} from "react-toastify";

const toastDefaultTheme :ToastOptions = {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
    transition: Bounce,
}

export { toastDefaultTheme }