import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateTaskDto {
  @IsString()
  description?: string;
  @IsArray()
  idtags: any[];

  @IsOptional()
  @IsNumber()
  idcategory: number;
}
