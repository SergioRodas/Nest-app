import { Controller, Get } from "@nestjs/common";

@Controller('tasks')
export class TaskController {

    @Get('/all')
    getAllTasks() {
        return "All tasks";
    }

    @Get('/')
    index() {
        return "Task section";
    }

}