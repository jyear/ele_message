import React, { useEffect, useState } from "react";
import { TextState } from "../../store/index";
import eventHandler from "../../events/index";
import { useRecoilState } from "recoil";
import "./index.less";

interface MessageItem {
	serverID: Number;
	nickname: String;
}

const Home: React.FC = () => {
	const [users, setUsers] = useState<Array<MessageItem>>([]);
	const [text, setText] = useRecoilState(TextState);

	useEffect(() => {
		eventHandler({
			type: "GetMessage", //事件类型
			data: {},
		}).then((res: any = []) => {
			console.log(111, res);
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

	const textNew = () => {
		setText(
			"zxczm,xcasadxcasadxcasadxcasadxcasadxcasadxcasadxcasadxcasadxcasadxcasadxcasadxcasadxcasadxcasadxcasadxcasadxcasadxcasadxcasadxcasadxcasadxcasadxcasadxcasadxcasadxcasadxcasadxcasadxcasadxcasad"
		);
	};

	return (
		<div className="test">
			<button onClick={addNewData}>新增数据</button>
			<button onClick={textNew}>{text}</button>
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
