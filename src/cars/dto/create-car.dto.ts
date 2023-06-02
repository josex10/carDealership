import { IsString, isString } from "class-validator";

export class CreateCarDto {

    @IsString({message: `The brand most be a cool brand`})
    readonly brand: string;

    @IsString()
    readonly model: string;
}