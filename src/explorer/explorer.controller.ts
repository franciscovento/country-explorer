import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { ExplorerService } from './explorer.service';
import { UpdateCountryDto } from './dto/update-country.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id.pipe';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('explorer')
export class ExplorerController {
  constructor(private readonly explorerService: ExplorerService ){}


  @Get('countries')
  getCountries(
    @Query() queryParameters: PaginationDto
  ){    
    return this.explorerService.getCountries(queryParameters)
  }

  @Post("create-country")
  createCountry(
    @Body() body: CreateCountryDto
  ){
    return this.explorerService.createCountry(body)
  }

  @Get('countries/:id')
  getCountryById(
    @Param('id') id: string
  ){    
    return this.explorerService.getCountryById(id)
  }

  @Put('countries/:id')
  updateCountry(
    @Param('id') id: string,
    @Body() body: UpdateCountryDto
  ){
    return this.explorerService.updateCountry(id, body)
  }

  @Delete('countries/:id')
  deleteCountry(
    @Param('id', ParseMongoIdPipe) id: string
  ){
    return this.explorerService.deleteCountry(id)
  }
}
