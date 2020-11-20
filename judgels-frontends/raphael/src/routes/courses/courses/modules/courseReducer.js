export const initialState = {
  value: undefined,
};

export function PutCourse(config) {
  return {
    type: 'jerahmeel/course/PUT',
    payload: config,
  };
}

export function DelCourse() {
  return {
    type: 'jerahmeel/course/DEL',
  };
}

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case 'jerahmeel/course/PUT':
      return { value: action.payload };
    case 'jerahmeel/course/DEL':
      return { value: undefined };
    default:
      return state;
  }
}
