import { IsOptional, IsString, IsUUID, isString, isUUID } from "class-validator";

export class UpdateCarDto {
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;


    @IsString({message: `The brand most be a cool brand`})
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @IsOptional()
    readonly model?: string;
}