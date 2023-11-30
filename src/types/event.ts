export type EventType = {
  date: string,
  description: string
};

export type EventsType = {
  id: string,
  name: string,
  startDate: string,
  endDate: string,
  events: EventType[]
}