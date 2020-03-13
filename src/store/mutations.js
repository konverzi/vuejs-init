const SETDATA = (state, payload) => {
  state.data = payload;
};
const SETVERSION = (state, data) => {
  state.version = data;
};

export default {
  SETDATA,
  SETVERSION
};
