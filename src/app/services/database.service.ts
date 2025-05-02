import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { Ticket } from '../models/ticket';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService extends Dexie {
  private readonly tickets!: Table<Ticket, number>;

  constructor() {
    super('TicketReservationDB');
    this.version(1).stores({
      tickets: '++id, name, email, eventName, eventDate, createdAt'
    });
    this.tickets = this.table('tickets');
  }

  // Add a new ticket
  addTicket(ticket: Ticket): Observable<number> {
    return from(this.tickets.add({
      ...ticket,
      createdAt: new Date()
    }));
  }

  // Get all tickets
  getAllTickets(): Observable<Ticket[]> {
    return from(this.tickets.toArray());
  }

  // Delete a ticket
  deleteTicket(id: number): Observable<void> {
    return from(this.tickets.delete(id));
  }

  // Get a ticket by id
  getTicketById(id: number): Observable<Ticket | undefined> {
    return from(this.tickets.get(id));
  }
}
