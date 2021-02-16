import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";

@Injectable({ providedIn: "root" })
export class CoursesEffects {
  constructor(private actions$: Actions, private store: Store<any>) {
    this.actions$.subscribe((action) => {
      if (action.type == "Load courses") {
        setTimeout(
          () =>
            this.store.dispatch({
              type: "Courses loaded",
              courses: [{ id: 1, foobar: "foobar" }],
            }),
          3000
        );
      }
    });
  }
}
