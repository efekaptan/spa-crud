import * as ErrorMessages from './errorMessages.js';

export const required = (text) => {
    if (text) {
        return null;
    } else {
        return ErrorMessages.isRequired;
    }
};

export const email = (text) => {
    const emailValid = text.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    return emailValid ? null : ErrorMessages.email;
};

export const mustMatch = (field, fieldName) => {
    return (text, state) => {
        return state[field] === text ? null : ErrorMessages.mustMatch(fieldName);
    };
};

export const minLength = (length) => {
    return (text) => {
        return text.length >= length ? null : ErrorMessages.minLength(length);
    };
};