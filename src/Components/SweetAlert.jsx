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

export const InfoAC = (msg, duration = 2500) => {
	return MySwal.fire({
		title: msg,
		icon: "info",
		timer: duration,
		allowEscapeKey: false,
		showConfirmButton: false,
	});
};

// const UpdatingUser = () => {
// 	Swal.fire({
// 		title: "Confirm Checkout",
// 		text: `Are you sure you want to update your account?\nPlease note that this action is irreversible.`,
// 		icon: "question",
// 		showCancelButton: true,
// 		confirmButtonText: "Yes, I'm Sure!",
// 		cancelButtonText: "Cancel",
// 	}).then((result) => {
// 		if (result.isConfirmed) {
// 			Close();
// 			try {
// 				const response = axios.put(
// 					"http://localhost:5011/user/updateAccount", // Update this URL to the correct endpoint
// 					updatedUserData,
// 					{
// 						headers: {
// 							Authorization: `Bearer ${user_token}`,
// 							"Content-Type": "application/json",
// 						},
// 					}
// 				);
// 				// Assuming the response data has a status property indicating success
// 				if (response.data.status === "success") {
// 					setFormErrors({});
// 					Success(
// 						"User data updated successfully",
// 						"/Metromart/",
// 						navigate
// 					);
// 					// Handle any additional logic after successful update
// 				} else {
// 					Fail("Failed to update user data");
// 					// Handle errors or show appropriate messages
// 				}
// 			} catch (error) {
// 				Fail("Error updating user data: ", error);
// 				// Handle network errors or other issues
// 			} finally {
// 				setLoading((prev) => !prev);
// 				Close();
// 			}
// 		}
// 	});
// };
