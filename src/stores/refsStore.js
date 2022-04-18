const createRefsStore = () => {
  const state = {};

  const methods = {
    updateRef(name, ref) {
      state[name] = ref;
    },
    getRefByName(name) {
      return state[name];
    },
    getState() {
      return state;
    },
  };

  return { ...methods };
};

export const refsStore = createRefsStore();
