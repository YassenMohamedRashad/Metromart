import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
export const Loader = () => {
	MySwal.fire({
		title: "Loading...",
		html: `
		<div class="Loader-1">
			<div class="Loader-2"></div>
		</div>`,
		allowOutsideClick: false,
		allowEscapeKey: false,
		showConfirmButton: false,
	});
};

export const Success = (html, link = null, navigate) => {
	MySwal.fire({
		title: "Succeed!",
		html: html,
		icon: "success",
		didClose: () => {
			if (link) navigate(link);
		},
	});
};

export const Fail = (title = null, text) => {
	MySwal.fire({
		icon: "error",
		title: title || "Oops...",
		text: text,
	});
};

export const Close = () => {
	MySwal.close();
};

export const InfoAC = (msg) => {
	return MySwal.fire({
		title: msg,
		icon: "info",
		timer: 2500,
		allowOutsideClick: false,
		allowEscapeKey: false,
		showConfirmButton: false,
	});
};
