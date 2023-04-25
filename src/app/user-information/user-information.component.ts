import { Component, OnInit } from '@angular/core';
import { UserInformation } from '../Interface/UserInformation';
import { UserInformationService } from '../service/user-information.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {
  UserInformation:UserInformation[]=[];
  constructor(private service:UserInformationService) { }

  ngOnInit(): void {
    this.service.getUserInformation().subscribe(data=>{
      this.UserInformation=data;
    })
  }

}
