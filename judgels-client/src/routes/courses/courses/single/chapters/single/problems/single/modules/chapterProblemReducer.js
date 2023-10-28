export const initialState = {
  value: undefined,
};

export function RefreshChapterProblem(key) {
  return {
    type: 'jerahmeel/chapterProblem/PUT',
    payload: key,
  };
}

export default function chapterProblemReducer(state = initialState, action) {
  switch (action.type) {
    case 'jerahmeel/chapterProblem/PUT':
      return { ...state, value: action.payload };
    default:
      return state;
  }
}
