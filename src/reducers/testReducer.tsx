const testReducer = (state = "", action: any) => {
  switch (action.type) {
    case "HUNGRY":
      return "I am hungry, Lets eat Pizza!";
    default:
      return "";
  }
};

export default testReducer;
