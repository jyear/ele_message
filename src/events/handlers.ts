import sqlHandlers from "./sql";
import socketHandlers from "./socket";
import Help from "./help";

export interface EventData {
	type: "SendMessage" | "GetMessage";
	data?: any;
}

// 初始化
const help = new Help();
const handlers = {
	// 存入数据库
	SendMessage: (eventData: EventData): Promise<unknown | Error> => {
		return new Promise((resolve, reject) => {
			const task = async () => {
				let data = [];
				sqlHandlers.saveMessage();
				data = await sqlHandlers.getMessage();
				resolve(data);
			};
			help.enqueueList(task);
		});
	},
	GetMessage: (eventData: EventData) => {
		return new Promise((resolve, reject) => {
			const task = async () => {
				const data = await sqlHandlers.getMessage();
				resolve(data);
			};
			help.enqueueList(task);
		});
	},
};

export default handlers as Record<
	keyof typeof handlers,
	(EventData: EventData) => Promise<unknown>
>;
