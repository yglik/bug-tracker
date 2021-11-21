import { Component, OnInit } from '@angular/core';
import { WebRequestService } from '../web-request.service';
import { FormControl, FormGroup , FormsModule } from '@angular/forms';


@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.scss']
})


export class TestApiComponent implements OnInit {
  tickets: any = [];
  postTitle: string = '';
  ticket = {
    title: 'my title', 
    description: 'this is the description', 
    user: 'Yochai Glik'
  };
  deleteID: string = '';
  updateID: string = '';

  constructor(private webReq: WebRequestService) { }

  loadData() {
    this.webReq.getData('').subscribe((response) => {
      this.tickets = response;
    });
    console.log("load data");
  }

  sendData() {
    this.webReq.postData('', this.ticket).subscribe((response) => {
    console.log(`sent data and got: ${response}`);
  })
  }

  updateData() {
    this.webReq.putData(this.updateID, this.ticket).subscribe((response) => {})
    console.log('update data');
  }

  deleteData() {
    this.webReq.deleteData(this.deleteID).subscribe();
    console.log("delete data");
  } 


  name = new FormControl('');

  ticketInfo = new FormGroup ({
    title: new FormControl(''),
    description: new FormControl('')
  });

  onSubmit(){
    console.warn(this.ticketInfo.value);
  }




  ngOnInit(): void {
  }

}
