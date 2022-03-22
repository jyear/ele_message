interface EventItem {
	handler: Function;
	callback: Function;
}

class EventHelp {
	private eventList: Array<EventItem> = [];
	constructor() {
		this.eventList = [];
	}
	enqueueList(fun: Function, callback?: Function) {
		let customDo = false;
		if (this.eventList.length <= 0) {
			customDo = true;
		}
		this.eventList.push({
			handler: fun,
			callback,
		});
		if (customDo) {
			this.workLoop();
		}
	}
	peek() {
		const doObj = this.eventList.shift();
		return doObj;
	}
	async workLoop() {
		if (this.eventList.length <= 0) return;
		const doObj = this.peek();
		doObj.handler();
		if (doObj.callback) {
			doObj.callback();
		}
		this.workLoop();
	}
}

export default EventHelp;
