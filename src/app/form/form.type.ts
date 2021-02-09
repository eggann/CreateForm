export enum RoomType {
  One = 'One Person Room',
  Two = 'Two Person Room',
  Three = 'Three Person Room',
  Four = 'Four Person Room'
}

export type FormValue = {
  name: string,
  gender: string,
  email: string,
  roomTypeOptions: string,
  numberGuests: number | '',
  date: string,
  freePickup: string,
  flightNumber: number | '',
  specialRequest: string
}