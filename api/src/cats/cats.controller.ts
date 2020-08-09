import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from 'src/dto/create-cat.dto';
import { Cat } from './cats.model';

@Controller('cats')
export class CatsController {
  
  constructor(private catService: CatsService){}

  @Get()
async findAll(): Promise<Cat[]> {
    return await this.catService.findAll();
  } 

  @Post()
  createCat(@Body() createCatDto: CreateCatDto){
      console.log(" POST createCat *********************");
      console.log(" POST createCat *********************");
      console.log(createCatDto);
      return this.catService.create(createCatDto)
  }
}