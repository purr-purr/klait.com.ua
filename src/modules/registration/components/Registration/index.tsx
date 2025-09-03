import { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from 'react';

import Button from '@modules/common/components/Button';
import Input from '@modules/common/components/Input';
import ModalLayout from '@modules/common/components/ModalLayout';
import { validateDefault, validatePhone } from '@modules/registration/helpers';

import { COMPANY_EMAIL } from '@utils/const';

import s from './Registration.module.scss';

import { IFormValues, IValidationState } from '@modules/registration/types';

const Registration: FC<{ moneyAmount: number; duration: number }> = ({
	moneyAmount,
	duration,
}) => {
	const [isRegistrationModal, setIsRegistrationModal] = useState<boolean>(false);
	const [stepFormValid, setStepFormValid] = useState<boolean>(false);
	const [isSuccessStage, setIsSuccessStage] = useState<boolean>(false);
	const formRef = useRef<HTMLFormElement>(null);

	const handleSuccessStage = (e: FormEvent) => {
		setIsSuccessStage(true);

		e.preventDefault();
		formRef.current?.submit();
	};

	const handleRegistrationModalClose = () => {
		setIsRegistrationModal(false);
		setStepFormValid(false);
		setIsSuccessStage(false);
		setFormValues(initFormValues);
	};

	const initFormValues: IFormValues = {
		phone: '',
	};

	const [formValues, setFormValues] = useState<IFormValues>(initFormValues);
	const [validationState, setValidationState] = useState<IValidationState>({
		phone: false,
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setFormValues((prevValues) => ({
			...prevValues,
			[name as string]: value,
		}));

		if (name === 'phone') {
			setValidationState((prevState) => ({
				...prevState,
				[name]: validatePhone(value),
			}));
		} else {
			setValidationState((prevState) => ({
				...prevState,
				[name as string]: validateDefault(value),
			}));
		}
	};

	useEffect(() => {
		const allValid = Object.values(validationState).every(Boolean);
		allValid && setStepFormValid(true);
	}, [validationState]);

	const isValidInput = (name: string): boolean => {
		return !validationState[name] && formValues[name].length > 0;
	};

	return (
		<>
			<Button
				className={s.startRegistrationBtn}
				text="Отримати дзвінок від менеджера"
				onClick={() => setIsRegistrationModal(true)}
			/>

			<ModalLayout
				className={s.container}
				isOpen={isRegistrationModal}
				onClose={handleRegistrationModalClose}
			>
				{isSuccessStage ? (
					<p className={s.successStage}>
						Дякуємо, ваша заявка в обробці, очікуйте активації особистого кабінету або
						дзвінка менеджеру.
					</p>
				) : (
					<>
						<form
							action={`https://formsubmit.co/${COMPANY_EMAIL}`}
							method="POST"
							ref={formRef}
							onSubmit={handleSuccessStage}
						>
							<input
								type="hidden"
								name="_next"
								value="https://fortex-f.com.ua/loan/"
							/>
							<input type="hidden" name="_captcha" value="false" />
							<input type="hidden" name="_subject" value="+1 заявка на кредит" />
							<input type="hidden" name="Сума кредиту" value={moneyAmount} />
							<input type="hidden" name="Строк кредиту" value={duration} />

							<Input
								name="phone"
								type="tel"
								placeholder="+380"
								label="Номер телефону"
								value={formValues.phone}
								onChange={handleInputChange}
								isInvalid={isValidInput('phone')}
							/>

							<Button
								isFormSubmit
								onClick={
									isSuccessStage ? handleRegistrationModalClose : handleSuccessStage
								}
								className={s.startRegistrationBtn}
								isDisabled={!stepFormValid}
								text="Отримати дзвінок від менеджера"
							/>
						</form>
					</>
				)}
			</ModalLayout>
		</>
	);
};

export default Registration;
