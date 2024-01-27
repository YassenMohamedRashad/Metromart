import { atom } from "jotai";

export const signUpErrorsAtom = atom({});

export const signUpAtom = atom({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address1: "",
    address2: null,
    phone_number: "",
    gender: null,
    age: 0,
});
