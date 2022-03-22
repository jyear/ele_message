import sqlHandlers from "./sql";
import Help from "./help";

export interface EventData {
	type: "SendMessage" | "GetMessage";
	data?: any;
}

// 初始化
const help = new Help();
const handlers = {
	SendMessage: (eventData: EventData) => {
		return new Promise((resolve, reject) => {
			const task = async () => {
				const len = 400;
				let data = [];
				for (let i = 0; i < len; i++) {
					await sqlHandlers.saveMessage();
				}
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
