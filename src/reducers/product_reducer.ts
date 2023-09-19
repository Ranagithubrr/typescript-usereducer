// initial state type

export interface PostState {
  loading: boolean;
  post: any[];
  error: boolean;
}
// initial state
export const INITIAL_STATE: PostState = {
  loading: false,
  post: [],
  error: false,
};

// post reducer
export const postReducer = (state: PostState, action: { type: string; payload?: any }): PostState => {
  switch (action.type) {
    case "START":
      return {
        loading: true,
        post: action.payload || [],
        error: false,
      };
    case "SUCCESS":
      return {
        loading: false,
        post: action.payload || [],
        error: false,
      };
    case "FAILED":
      return {
        loading: false,
        post: [],
        error: true,
      };
    default:
      return INITIAL_STATE;
  }
};
