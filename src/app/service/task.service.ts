import { Injectable } from '@angular/core';
import{ HttpClient,HttpHandler}from"@angular/common/http"

import {TASKS} from "../mock-task";
import{Task} from "../Task";
import {Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
private apiUrl="http://localhost:5001/tasks"

  constructor(
    private http:HttpClient
  ) { 
    
  }


  getTasks(): Observable <Task []> {

    return this.http.get<Task[]>(this.apiUrl)

  }
}
