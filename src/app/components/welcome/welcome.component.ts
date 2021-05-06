import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { take } from "rxjs/operators"

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
    public data: any
    constructor(public ghService: GithubService) { }

    ngOnInit(): void {
        this.ghService.getDataFromGitHub("fsaibene").pipe(take(1)).subscribe((value) => {
            this.data = value;
        })
    }

}
