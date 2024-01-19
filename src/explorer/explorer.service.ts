import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { Model, isValidObjectId } from 'mongoose';
import { Country } from './entities/country.entity';
import { InjectModel } from '@nestjs/mongoose';
import { City } from './entities/city.entity';
import { UpdateCountryDto } from './dto/update-country.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class ExplorerService {

  constructor(
    @InjectModel(Country.name)
    private readonly countryModel: Model<Country>,

  ){}

  async createCountry(createCountryDto: CreateCountryDto){
    createCountryDto.name = createCountryDto.name.toUpperCase();
    
    try {
      const country = await this.countryModel.create( createCountryDto )
      return {
        message: "Country created",
        data: country
      };
    } catch (error) {
      if(error.code === 11000) {
        throw new BadRequestException(`This country already exists ${JSON.stringify(error.keyValue)}`)
      }
      throw error;
    }
  }

  async getCountries(queryParameters:PaginationDto){
    try {

      const { limit=10, offset=0 } = queryParameters;
      const countries = await this.countryModel.find().limit(limit).skip(offset);
      return {
        message: "Countries found",
        data: countries
      };
    } catch (error) {
      throw error;
    }
  }

  async getCountryById(id:string){
    try {
      if(!isValidObjectId(id)){
        throw new BadRequestException(`Invalid id ${id}`)
      } 
      const country = await this.countryModel.findById(id)
      if(!country) throw new NotFoundException(`Country with id ${id} not found`)
      return country;
    } catch (error) {
      throw error;
    }
  }

  async updateCountry(id: string, updateCountry: UpdateCountryDto){
    try {
      const country = await this.countryModel.findById(id);
      updateCountry.name = updateCountry.name.toUpperCase();
      if(!country) throw new NotFoundException(`Country with id ${id} not found`)
      await country.updateOne(updateCountry, { new: true })
      return {
        ...country.toJSON(),
        ...updateCountry
      };
    } catch (error) {
      if(error.code === 11000) {
        throw new BadRequestException(`This country already exists ${JSON.stringify(error.keyValue)}`)
      }
      throw error;
    }

  }


  async deleteCountry(id: string){
    try {
      const country = await this.countryModel.findById(id);
      if(!country) throw new NotFoundException(`Country with id ${id} not found`)
      await country.deleteOne();
      return {
        message: "Country deleted",
        data: country
      };
    } catch (error) {
      throw error;
    }
  }
}
