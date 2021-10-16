import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  @Input() gitProfileRepos: any[] = [];
  @Input() display: any
  p: number = 1
  perPage: number = 10
  len: number = 10
  

  ngOnInit(): void {
    this.len = this.gitProfileRepos.length
  }

}
