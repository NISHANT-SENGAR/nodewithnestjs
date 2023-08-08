import { Module } from '@nestjs/common';
import { QuizeController } from './quize.controller';
import { QuizeService } from './quize.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizRepository } from './quiz.repository';

@Module({
    controllers:[QuizeController],
    imports:[TypeOrmModule.forFeature([QuizRepository])],
    providers: [QuizeService],
})
export class QuizeModule {}
