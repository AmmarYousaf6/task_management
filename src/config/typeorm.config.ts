import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const typeOrmConfig : TypeOrmModuleOptions = {
    type : 'postgres',
    host : 'localhost',
    port : 5432,
    username : 'tecmint',
    password : 'Ammar123',
    database : 'taskmanagement',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize : false
}