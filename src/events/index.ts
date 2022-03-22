import handlers, { EventData } from "./handlers";

async function eventHandle(eventData: EventData) {
	return await handlers[eventData.type](eventData);
}
export default eventHandle;
