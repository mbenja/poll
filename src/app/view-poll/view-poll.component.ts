import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsTooltip } from 'ng2-charts';

import { PollService } from '../services/poll.service';
import { Poll } from '../constants/Poll';

@Component({
  selector: 'app-view-poll',
  templateUrl: './view-poll.component.html',
  styleUrls: ['./view-poll.component.css']
})
export class ViewPollComponent implements OnInit {
  public pollId: string;
  public poll: Poll;
  public selected: number;
  public hasVoted: boolean;
  public shareButtonText: string = "Share";
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [];

  constructor(private route: ActivatedRoute, private pollService: PollService) {
    monkeyPatchChartJsTooltip();
  }

  ngOnInit(): void {
    this.hasVoted = false;
    this.pollId = this.route.snapshot.paramMap.get('id');
    this.pollService.getPoll(this.pollId).subscribe(res => {
      this.poll = res;
      this.pieChartData = [this.poll.votesOne, this.poll.votesTwo, this.poll.votesThree];
      this.pieChartLabels = [this.poll.optionOne, this.poll.optionTwo, this.poll.optionThree];
    })
  }

  selectOption(option: number): void {
    this.selected = option;
  }

  submitVote(): void {
    switch (this.selected) {
      case 1: this.poll.votesOne++; break;
      case 2: this.poll.votesTwo++; break;
      case 3: this.poll.votesThree++; break;
    }
    this.pollService.updatePoll(this.poll, this.pollId).then(() => this.hasVoted = true);
  }

  copyLink(): void {
    navigator.clipboard.writeText(window.location.href).then(() => {
      this.shareButtonText = "Copied!";
      setTimeout(() => this.shareButtonText = "Share", 3000);
    });
  }

  getSelectableItemClassesForOption(option: Number) {
    return ({
      "card": true,
      "view-poll-selectable-item": true,
      "selected": this.selected === option
    });
  }

  getSubmitVoteButtonClasses() {
    return({
      "button": true,
      "disabled": this.selected === undefined
    });
  }
}
