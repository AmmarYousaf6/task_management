import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateTaskDto} from "./dto/create-task-dto";
import {TaskRepository} from "./task.repository";
import {InjectRepository} from "@nestjs/typeorm";
import {Task} from "./task.entity";
import {TaskStatus} from "./task-status-enum";
import {GetTasksFilterDto} from "./dto/get-tasks-filter.dto";

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository) {

    }
    async getTasks(filterDto : GetTasksFilterDto):Promise<Task[]> {
        return this.taskRepository.getTasks(filterDto)
    }
    // getAllTasks(): Task[]{
    //     return this.tasks;
    // }
    // //comments : for example : http://localhost:3000/tasks?status=OPEN&search=a
    // getTasksWithFilters(filterDto : GetTasksFilterDto){
    //     const {status, search} = filterDto;
    //     let tasks = this.getAllTasks();
    //     if(status){
    //         tasks = tasks.filter(task => task.status === status);
    //     }
    //     if(search){
    //         tasks = tasks.filter(task => task.title.includes(search) || task.description.includes(search));
    //     }
    //     return tasks;
    // }
    async getTaskById(id:number): Promise<Task>{
        const found = await this.taskRepository.findOne(id);
        if(!found){
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
        return found;
    }
    async createTask(createTaskDto: CreateTaskDto): Promise<Task>{
        return this.taskRepository.createTask(createTaskDto);
    }

    async deleteTask(id:number): Promise<void>{
        const result =  await this.taskRepository.delete(id);
        if(result.affected === 0){
            throw new NotFoundException(`Task with ID "${id}" not found`);
        } else {

        }
    }
    async updateTaskStatus(id:number, status:TaskStatus): Promise<Task>{
        const task = await this.getTaskById(id);
        task.status = status;
        await task.save();
        return task;
    }
}
