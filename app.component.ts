import { Component } from '@angular/core';
import { AppService } from './user/app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'angular';
  todo = null;

  constructor(private appService: AppService) {
      this.appService.getTodoData(2)
      .subscribe((data: any) => {this.todo = data,console.log(this.todo)})

      this.appService.putTodoData({id: 2, userId: 2, title: 'test'})
      .subscribe((data: any) => console.log(data))
  }
}
