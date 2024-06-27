import { reducer as countReducer } from "./count";
import { reducer as authReducer } from "./auth";

// Define the ActionType with a more specific type for the 'type' property
export interface ActionType {
    type: string;
    payload?: any;
}

// Use a more specific type for the rootReducer
export type RootState = {
    count: ReturnType<typeof countReducer>;
    auth: ReturnType<typeof authReducer>;
};

// Define the rootReducer explicitly as a function that combines different reducers
const rootReducer = {
    count: countReducer,
    auth: authReducer
};

export default rootReducer;
