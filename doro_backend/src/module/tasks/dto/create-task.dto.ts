import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  description?: string;

  @IsBoolean()
  @IsNotEmpty()
  done?: boolean;

  @IsNumber()
  @IsNotEmpty()
  idtag?: number;

  @IsNotEmpty()
  @IsDateString()
  startTime?: Date;

  @IsNotEmpty()
  @IsDateString()
  endTime?: Date;
}
