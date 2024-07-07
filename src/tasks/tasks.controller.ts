import { Controller, Get } from '@nestjs/common';
import { TasksService } from './task.service';

@Controller('tasks')
export class TaskController {
    constructor(private tasksService: TasksService) {}

    @Get('/all')
    getAllTasks() {
        return this.tasksService.getTasks();
    }

    @Get('/')
    index() {
        return 'Task section';
    }
}
