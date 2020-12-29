import {rootReducer} from "./store";

export type AppRootStateType = ReturnType<RootReducerType>
export type RootReducerType = typeof rootReducer