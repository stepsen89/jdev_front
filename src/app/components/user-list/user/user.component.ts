import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: any;
  @Output() selectedUser = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }

  onSelectedUser(){
    this.selectedUser.emit();
  }

}
