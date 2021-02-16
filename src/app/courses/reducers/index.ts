import { createEntityAdapter, EntityState } from "@ngrx/entity";
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
} from "@ngrx/store";
import { Course } from "../model/course";

export interface CoursesState extends EntityState<Course> {}

export const adapter = createEntityAdapter<Course>();

export const initialCoursesState: CoursesState = adapter.getInitialState();

export function coursesReducer(state: CoursesState, action: any): CoursesState {
  switch (action.type) {
    case "Courses loaded":
      return adapter.addAll(action.courses, state);
    default:
      return state;
  }
}
