import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: classNames.ArgumentArray) => {
    return twMerge(classNames(inputs));
}

export const libs:string = "tailwindUtils";
