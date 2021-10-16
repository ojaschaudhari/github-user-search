import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../service/users-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userDataService: UsersDataService) { }

  user: any;
  gitProfile: any;
  gitProfileRepos: any[] = [];
  errorMessage: any;
  content = true

  searchUser() {
    this.userDataService.getProfile(this.user).subscribe(
      (data) => {
        this.gitProfile = data
        this.content = false
      },
      (err) => { this.errorMessage = err }
    )

    this.userDataService.getProfileRepos(this.user).subscribe(
      (data) => {
        this.gitProfileRepos = data
        this.content = false
      },
      (err) => { this.errorMessage = err }
    )
  }

  ngOnInit(): void {
  }

}
