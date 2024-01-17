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
		onBeforeOpen: () => {
			MySwal.showLoading();
		},
	});
};

export const Success = (html) => {
	MySwal.fire({
		title: <strong>Succeed!</strong>,
		html: html,
		icon: "success",
	});
};

export const Fail = (title = null, text) => {
	MySwal.fire({
		icon: "error",
		title: title || "Oops...",
		text: text,
	});
};
