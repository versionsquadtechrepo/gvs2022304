import Input from "@components/ui/input";
import PasswordInput from "@components/ui/password-input";
import Button from "@components/ui/button";
import { useForm } from "react-hook-form";
import Logo from "@components/ui/logo";
import { useUI } from "@contexts/ui.context";
import { useSignUpMutation, SignUpInputType } from "@framework/auth/use-signup";
import { ImGoogle2, ImFacebook2 } from "react-icons/im";
import Link from "@components/ui/link";
import { ROUTES } from "@utils/routes";
import { useTranslation } from "next-i18next";

const SelectCity: React.FC = () => {
	const { t } = useTranslation();
	const { mutate: signUp, isLoading } = useSignUpMutation();
	const { setModalView, openModal, closeModal } = useUI();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpInputType>();

	function handleSignIn() {
		setModalView("LOGIN_VIEW");
		return openModal();
	}

	function onSubmit({ name, email, password }: SignUpInputType) {
		signUp({
			name,
			email,
			password,
		});
		console.log(name, email, password, "sign form values");
	}
	return (
		<div className="py-5 px-5 sm:px-8 bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300">
			<div className="text-center mb-6 pt-2.5">
				<div onClick={closeModal}>
					<Logo />
				</div>
				
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col justify-center"
				noValidate
			>
				<div className="flex flex-col space-y-4">
				<div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg fill="none" className="w-5 h-5 text-gray-500 dark:text-gray-400" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
              </svg>
            </div>
            <input type="text" id="input-group-1" className="bg-white border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select City" defaultValue={'Hyderabad, Telangana, India'} />
            
          </div>
					
					
				</div>
			</form>
			

			
		</div>
	);
};

export default SelectCity;
