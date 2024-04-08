import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit{
  taskId:any;
  task:any;
  constructor(private route:ActivatedRoute,private tasksservice:TasksService,private router:Router,private title:Title){
    this.title.setTitle('task');
  }
  ngOnInit(): void {
    this.taskId=this.route.snapshot.paramMap.get('id');
    this.task=this.tasksservice.tasks[this.taskId]
    
  }
  updateTask(){
    this.tasksservice.updateTask(this.taskId,this.task);
    this.router.navigate(['/']);

  }
  deleteTask(){
    this.tasksservice.deleteTask(this.taskId);
    this.router.navigate(['/']);

  }

}
