import {userRoutes} from "./userRoutes";
import {adminRoutes} from "./adminRoutes";
import {guestRoutes} from "./guestRoutes";
import {publicOnlyRoutes} from "./publicOnlyRoutes";

export const allRoutes = [
    ...guestRoutes,
    ...userRoutes,
    ...adminRoutes,
    ...publicOnlyRoutes
];
