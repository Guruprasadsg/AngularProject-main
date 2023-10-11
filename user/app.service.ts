import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable()
export class AppService {
    
    constructor(private http: HttpClient) {
    }
    getTodoData(todoId: number = 1){
        return this.http.get
        ('https://jsonplaceholder.typicode.com/posts');
    }
    putTodoData(data: any){
        return this.http.put
        ('https://jsonplaceholder.typicode.com/todos/posts/${data.id}', data);
    }
    postTodoData(data: any){
        return this.http.post
        ('https://jsonplaceholder.typicode.com/todos/post', data);
    }
    deleteTodoData(todoId: any){
        return this.http.delete
        ('https://jsonplaceholder.typicode.com/todos/posts/${todoIds}');
    }
}