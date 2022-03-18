import React, { useEffect, useState } from "react";
import eventHandler from "../../events/index";
interface MessageItem {
  serverID: Number;
  nickname: String;
}

const Home: React.FC = () => {
  const [users, setUsers] = useState<Array<MessageItem>>([]);

  useEffect(() => {
    eventHandler({
      type: "GetMessage", //事件类型
      data: {},
    }).then((res: any = []) => {
      setUsers(res);
    });
  }, []);

  const addNewData = () => {
    eventHandler({
      type: "SendMessage", //事件类型
      data: {},
    }).then((res: any = []) => {
      setUsers(res);
    });
  };

  return (
    <div>
      <button onClick={addNewData}>新增数据</button>
      {users.map((item: MessageItem) => {
        return (
          <div key={item.serverID + "_" + item.nickname}>
            {JSON.stringify(item)}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
