import { createAction } from '@ngrx/store';

export const openPostProjectModal = createAction(
  '[Dashboard Page] Open Post Project Modal'
);

export const closePostProjectModal = createAction(
  '[Dashboard Page] Close Post Project Modal'
);
