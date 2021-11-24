export const getSavedTaskIds = () => {
  const savedTaskIds = localStorage.getItem('taskIds')
    ? JSON.parse(localStorage.getItem('taskIds'))
    : [];

  return savedTaskIds;
};

export const taskIds = (taskIdArr) => {
  if (taskIdArr.length) {
    localStorage.setItem('taskIds', JSON.stringify(taskIdArr));
  } else {
    localStorage.removeItem('taskIds');
  }
};

export const removeTaskId = (inputTaskId) => {
  const taskIds = localStorage.getItem('taskIds')
    ? JSON.parse(localStorage.getItem('taskIds'))
    : null;

  if (!taskIds) {
    return false;
  }

  const updatedTaskIds = taskIds?.filter((taskId) => taskId !== inputTaskId);
  localStorage.setItem('taskIds', JSON.stringify(updatedTaskIds));

  return true;
};
