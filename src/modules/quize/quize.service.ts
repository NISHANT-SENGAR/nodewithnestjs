import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { QuizRepository } from "./quiz.repository";
import { CreateQuizeDto } from "./dto/CreateQuize.dto";
import { Quiz } from "./quiz.entity";


@Injectable()

export class QuizeService {
    constructor(@InjectRepository(QuizRepository) private quizRepository: QuizRepository) { }


    getAllQuiz(): any {
        return [1, 2, 3]
    }


    async cerateNewQuiz(quiz: CreateQuizeDto){
        return await this.quizRepository.save(quiz)
    }
}
