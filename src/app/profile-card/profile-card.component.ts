import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  constructor() { }
  @Input() gitProfileCard: any;
  @Input() display: boolean = true;

  ngOnInit(): void {
  }

}
