import { USER_ROLE } from './user-role.model';

export default interface UserModel {
    id: number;
    name: string;
    surname: string;
    username: string;
    password: string;
    role: USER_ROLE;
    pictureUrl: string;
    loggedIn: boolean;
}
