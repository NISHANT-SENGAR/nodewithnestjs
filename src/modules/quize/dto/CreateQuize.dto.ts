import { IsNotEmpty ,Length} from "class-validator";

export class CreateQuizeDto {
    @IsNotEmpty({message:'This quiz should have email'})
    @Length(3,255)

    email: string;
    @IsNotEmpty({message:'This quiz should have password'})
    @Length(5,255)
    password: string;
}