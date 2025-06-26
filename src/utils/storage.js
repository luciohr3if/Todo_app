export const saveToStorage = (data) => {
  localStorage.setItem('todoList', JSON.stringify(data));
};

export const loadFromStorage = () => {
  const data = localStorage.getItem('todoList');
  return data ? JSON.parse(data) : [];
};
