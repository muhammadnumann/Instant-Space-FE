
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: '34',
    start: todayStr
  },
//   {
//     id: createEventId(),
//     title: '48',
//     start: todayStr
//   }
]

export function createEventId() {
  return String(eventGuid++)
}
