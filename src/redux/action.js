export const INCREMENT_COUNTER = "INCREMENT_COUNTER";

// ^ enum / constant

export const incrementCounter = (amount) => ({
  type: INCREMENT_COUNTER,
  payload: amount
});
