import { Component, OnInit } from '@angular/core';
import { WebRequestService } from '../web-request.service';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  tickets: any = [];

  // Ticket model (TODO - create ticket model)
  ticket = {
    title: 'my title',
    description: 'this is the description',
    user: 'Yochai Glik'
  };

  //Form group for new quick ticket
  newTicket = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  })

  //using specific function to update view (TODO - check if this is the best practice to update view)
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

  constructor(private webReq: WebRequestService) { }

  ngOnInit(): void {
    this.updateView()
  }

}
