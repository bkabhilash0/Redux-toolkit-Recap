import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface PostType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const fetchAllTodos = createAsyncThunk("todos/fetchtodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
});

interface InitialStatetype {
  todos: PostType[];
}

const initalState: InitialStatetype = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initalState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTodos.pending, (state) => {
        console.log("Pending...");
      })
      .addCase(fetchAllTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(fetchAllTodos.rejected, (state, action) => {
        console.log("Failed");
      });
  },
});

// export const {} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
