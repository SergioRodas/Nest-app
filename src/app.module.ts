import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProjectsModule } from './projects/projects.module';
import { TaskModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [TaskModule, ProjectsModule, AuthModule, UsersModule],
})
export class AppModule {}
