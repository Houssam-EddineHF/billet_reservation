import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseService } from '../../services/database.service';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];
  loading = true;
  error = false;
  deleteSuccess = false;

  constructor(private readonly dbService: DatabaseService) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.loading = true;
    this.dbService.getAllTickets().subscribe({
      next: (tickets) => {
        this.tickets = tickets;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading tickets:', error);
        this.error = true;
        this.loading = false;
      }
    });
  }

  cancelTicket(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir annuler cette réservation?')) {
      this.dbService.deleteTicket(id).subscribe({
        next: () => {
          this.deleteSuccess = true;
          this.loadTickets();
          setTimeout(() => {
            this.deleteSuccess = false;
          }, 3000);
        },
        error: (error) => {
          console.error('Error deleting ticket:', error);
        }
      });
    }
  }

  calculateTotal(ticket: Ticket): number {
    return ticket.quantity * ticket.price;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR');
  }
}
