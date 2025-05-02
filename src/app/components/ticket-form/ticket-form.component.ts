import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatabaseService } from '../../services/database.service';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent {
  ticketForm: FormGroup;
  submitted = false;
  success = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly dbService: DatabaseService
  ) {
    this.ticketForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      eventName: ['', [Validators.required]],
      eventDate: ['', [Validators.required]],
      quantity: [1, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    
    if (this.ticketForm.valid) {
      const ticket: Ticket = {
        ...this.ticketForm.value,
        createdAt: new Date()
      };
      
      this.dbService.addTicket(ticket).subscribe({
        next: () => {
          this.success = true;
          this.resetForm();
          setTimeout(() => {
            this.success = false;
          }, 3000);
        },
        error: (error) => {
          console.error('Error adding ticket:', error);
        }
      });
    }
  }

  resetForm(): void {
    this.ticketForm.reset({
      quantity: 1,
      price: 0
    });
    this.submitted = false;
  }

  get f() {
    return this.ticketForm.controls;
  }
}
