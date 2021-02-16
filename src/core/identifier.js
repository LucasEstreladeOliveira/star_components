const identifier = () => {
  return Math.random()
    .toString(36)
    .slice(6);
};

export default identifier;
