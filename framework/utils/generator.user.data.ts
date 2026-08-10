import { faker } from "@faker-js/faker";
import { UserAuthData } from "../types/UserAuthData";
import { UserCheckoutData } from "../types/UserCheckoutData";
import AppConstants from "../constants/app";

export function generateAuthData() {
    const auth: UserAuthData = {
        UserName: generateUserName({
            length: AppConstants.userName_MinLength
        }),
        Password: generatePassword({
            length: AppConstants.password_MinLength
        })
    };

    return auth;
}

export function generateCheckoutData() {
    const auth: UserCheckoutData = {
        FirstName: generateFirstName(),
        LastName: generateLastName(),
        PostalCode: generatePostalCode()
    };

    return auth;
}

function generateUserName(options?: { length: number }) {
    return faker.internet.password(
        options && {
            length: options.length
        }
    );
}

function generatePassword(options?: { length: number }) {
    return faker.internet.password(
        options && {
            length: options.length
        }
    );
}

function generateFirstName() {
    return faker.person.firstName();
}

function generateLastName() {
    return faker.person.lastName();
}

function generatePostalCode() {
    return faker.location.zipCode();
}
