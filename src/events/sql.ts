const sqlHandlers = {
  saveMessage: async () => {
    const data = await window.ipc.invoke("sql", {
      table: "users",
      fun: "insert",
      data: `, true, 'as', 'as','as','as','as',1,2,'area','+86','13408478699',2,123321,true, '${new Date().getTime()}`,
    });
    return data;
  },
  getMessage: async () => {
    const data = await window.ipc.invoke("sql", {
      table: "users",
      fun: "select",
    });
    return data;
  },
};

export default sqlHandlers;
