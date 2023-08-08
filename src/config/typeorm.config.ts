import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Quiz } from "src/modules/quize/quiz.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'node',
    entities: [Quiz],
    synchronize: true,
}