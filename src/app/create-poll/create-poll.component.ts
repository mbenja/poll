import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PollService } from '../services/poll.service';
import { Poll } from '../constants/Poll';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {
  public name: string = "";
  public option1: string = "";
  public option2: string = "";
  public option3: string = "";

  constructor(private pollService: PollService, private router: Router) { }

  ngOnInit(): void {
  }

  createPoll(): void {
    const newPoll: Poll = {
      name: this.name,
      optionOne: this.option1,
      optionTwo: this.option2,
      optionThree: this.option3,
      votesOne: 0,
      votesTwo: 0,
      votesThree: 0
    };
    this.pollService.createPoll(newPoll).then(res => {
      this.router.navigateByUrl(`/poll/${res}`);
    });
  }

  getCreatePollButtonClasses() {
    return ({
      "button": true,
      "disabled": !this.name || !this.option1 || !this.option2 || !this.option3
    });
  }

}
