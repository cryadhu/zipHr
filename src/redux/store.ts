import { configureStore } from "@reduxjs/toolkit";
import storiesSlicer from "./feature/storiesSlicer";

export default configureStore({
  reducer: {
    stories: storiesSlicer,
  },
});
