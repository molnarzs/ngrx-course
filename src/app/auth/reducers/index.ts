import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from "@ngrx/store";
import { User } from "../model/user.model";

export const authFeatureKey = "auth";

export interface AuthState {
  user?: User;
}

export const reducers: ActionReducerMap<AuthState> = {};

export function authReducer(state, action): AuthState {
  switch (action.type) {
    case "Login action":
      return { ...state, user: action.payload.userProfile };
    default:
      return state;
  }
}
