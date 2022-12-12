import { scaler } from "../helper/scaler";
import { typography } from "./typography";
import { white, gray, black, red, primary } from "./palette";

const colors = {
    white,
    gray,
    black,
    red,
    primary,
};

const base = {
    templatePadding: scaler(16),
    viewPadding: scaler(24),
};

export default {
    colors,
    base,
    typography,
};