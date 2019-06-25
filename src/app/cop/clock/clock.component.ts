import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.less']
})
export class ClockComponent implements OnInit {
  second: number;
  minute: number;
  hour: number;
  constructor() { }

  ngOnInit() {
    this.initTime();
    setInterval(() => {
      this.initTime();
    }, 1000);
  }

  initTime() {
    const time = new Date();
    this.second = time.getSeconds();
    this.minute = time.getMinutes() + this.second / 60;
    this.hour =  time.getHours() + this.minute / 60;
  }

  setHour() {
    return {
      'transform': `rotate(${this.hour * 30 - 90}deg)`
    };
  }

  setMinute() {
    return {
      'transform': `rotate(${this.minute * 6 - 90}deg)`
    };
  }

  setSecond() {
    return {
      'transform': `rotate(${this.second * 6 - 90}deg)`
    };
  }
}
