import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";
import { SectionItem, SectionMappedItem } from "../../api/types";

export const getSections = createAsyncThunk(
  "sections",
  async (section: string) => {
    const sectionList = await api.fetchSectionList(section);
    return { key: section, data: sectionList };
  }
);

interface StoriesState {
  sectionList: SectionMappedItem;
  loading: true | false;
}

const initialState = {
  sectionList: {},
  loading: true,
} as StoriesState;

export const storiesSlicer = createSlice({
  name: "stories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSections.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getSections.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(getSections.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);
      const { payload } = action;
      state.sectionList[payload.key] = payload.data;
    });
  },
});

export const {} = storiesSlicer.actions;

export default storiesSlicer.reducer;
