import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizeService } from './quize.service';
import { CreateQuizeDto } from './dto/CreateQuize.dto';

@Controller('quize')
export class QuizeController {

    constructor(private readonly quizeService: QuizeService) { }
    @Get('/')

    getAllQuiz(): any {
        return this.quizeService.getAllQuiz()
    }

    @Post('/create')

    @HttpCode(200)

    @UsePipes(ValidationPipe)

   async createQuize(@Body() quizeData: CreateQuizeDto) {

        return await this.quizeService.cerateNewQuiz(quizeData)
    }
}
