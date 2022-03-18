import sqlHandlers from "./sql";
import socketHandlers from "./socket";

interface Handlers {
  SendMessage: () => Promise<any>;
  GetMessage: () => Promise<any>;
}
export interface EventData {
  type: "SendMessage" | "GetMessage";
  data: any;
}

const eventList = [];

const handlers: Handlers = {
  SendMessage: async () => {
    let start = new Date().getTime();
    const len = 400;
    let data = [];
    for (let i = 0; i < len; i++) {
      const d1 = new Date().getTime();
      await sqlHandlers.saveMessage();
      const d2 = new Date().getTime();
      console.log("单条写入时间：", d2 - d1);
      //data = await sqlHandlers.getMessage();
      //const d3 = new Date().getTime();

      //console.log("全部取出时间：", d3 - d2);
      // console.log("单条写入取出耗时", new Date().getTime() - d1);
    }
    // console.log(`${len}顺序写入`, new Date().getTime() - start);

    data = await sqlHandlers.getMessage();
    console.log(`总条数：`, data.length);
    // console.log(`${len}顺序写入`, data.length);
    return data;
  },
  GetMessage: async () => {
    const data = await sqlHandlers.getMessage();

    return data;
  },
};

export default handlers;
