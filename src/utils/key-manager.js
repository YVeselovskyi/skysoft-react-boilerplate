export const keyManager = (actions, { prefix }) =>
  Object.keys(actions).reduce((acc, cur) => {
    acc[cur] = prefix + cur;
    return acc;
  }, {});
