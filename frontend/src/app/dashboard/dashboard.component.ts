import { Component, OnInit } from '@angular/core';
import { WebRequestService } from '../web-request.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tickets: any = [];

  // Ticket model (TODO create ticket model)
  ticket = {
    title: 'my title',
    description: 'this is the description',
    user: 'Yochai Glik'
  };

  newTicket = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  })

  updateView(){
    this.webReq.getData('').subscribe((response) => {
      this.tickets = response;
    })
  }

  addTicket() {
    this.ticket.title = this.newTicket.value['title'];
    this.ticket.description = this.newTicket.value['description'];
    this.webReq.postData('', this.ticket).subscribe(() => {
      this.updateView();
    });
  }


  deleteTicket(ticketID: string) {
    this.webReq.deleteData(ticketID).subscribe(() => {
      this.updateView();
    });
  }

  constructor(private webReq: WebRequestService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.updateView()
  }

}
