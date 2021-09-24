import { Component, OnInit } from '@angular/core';
import { GreetingsCommonService } from './greetings/greetings-service';

import { formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = '';

  constructor(private greetingsService: GreetingsCommonService) {
    //Nothing to do 
  }

  public ngOnInit() {
    const format = 'dd/MM/yyyy HH:mm';
    const myDate = new Date();
    const locale = 'en-US';
    const formattedDate = formatDate(myDate, format, locale);

    this.greetingsService.greetings().subscribe(data => {
      this.title = formattedDate + ' ' + <any>data;
    });
  }
}
