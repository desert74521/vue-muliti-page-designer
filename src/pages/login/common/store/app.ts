const app = {
    namespaced: true,
    state: {
      masking: false,
    },
    mutations: {
      SHOW_MASK(state: any) {
        state.masking = true;
      },
      HIDE_MASK(state: any) {
        state.masking = false;
      },
    },
    actions: {

    },
};
export default app;
