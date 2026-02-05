const MAX_HISTORY = 50;

const history = [];

export const addAnalysis = (entry) => {
  history.unshift(entry);
  if (history.length > MAX_HISTORY) {
    history.pop();
  }
};

export const getHistory = () => [...history];
