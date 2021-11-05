import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const typeOrmConfig : TypeOrmModuleOptions = {
    type : 'postgres',
    host : 'ec2-34-242-89-204.eu-west-1.compute.amazonaws.com',
    port : 5432,
    username : 'lgrzgulpsrgoxy',
    password : '0111cdee2e0c1c96b8f757a18985d727b08751b5e78fb1006e2f23c704172975',
    database : 'd7dq5qmihjekr2',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize : true
}