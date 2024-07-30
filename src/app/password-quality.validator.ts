import { AbstractControl } from "@angular/forms";

export const isGoodPassword = (control: AbstractControl<string | null>) => {
	const password = control.value;

	if (password && password.length < 8) {
		return { tooShort: true };
	}

	if (password && (
		!/[A-Z]/.test(password) ||
		!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
	)) {
		return { poorQuality: true };
	}

	return null;
}