const initialState = {
  eventsArray: [],
  loaded: false,
  meta: {}
};

export function eventReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_EVENTS":
      console.log(action.payload);
      const newState = {
        eventsArray: action.payload.data,
        loaded: true,
        meta: action.payload.metadata
      };
      return newState;
    default:
      return state;
  }
}
