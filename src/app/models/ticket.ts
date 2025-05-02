export interface Ticket {
  id?: number;
  name: string;
  email: string;
  eventName: string;
  eventDate: string;
  quantity: number;
  price: number;
  createdAt: Date;
}
