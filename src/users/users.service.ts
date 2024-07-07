import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            name: 'John',
            email: 'john@john.com',
        },
        {
            id: 2,
            name: 'John',
            email: 'john@john.com',
        },
        {
            id: 3,
            name: 'John',
            email: 'john@john.com',
        },
    ];

    getUsers() {
        return this.users;
    }
}
