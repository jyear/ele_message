import handlers, { EventData } from "./handlers";

async function eventHandle(eventData: EventData) {
  return await handlers[eventData.type]();
}
export default eventHandle;
