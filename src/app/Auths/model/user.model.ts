import { Role } from "./role.model";

export class User {
    id?: number;
    username?: string;
    password?:string
    role?: Role;
    token?: string;
}