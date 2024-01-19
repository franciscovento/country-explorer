import { Injectable } from '@nestjs/common';
import { CountriesResponse } from 'src/common/interfaces/countries.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Country } from 'src/explorer/entities/country.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel(Country.name)
    private readonly countryModel: Model<Country>,
    private readonly http: AxiosAdapter,
  ){}

  async executeSeed(){

    await this.countryModel.deleteMany({})
    const response = await this.http.get<CountriesResponse[]>("https://restcountries.com/v3.1/all");
    const countries = response.map((country) => {
      return { name: country.name.common}
    })    
    await this.countryModel.insertMany(countries);

    return "Seed executed";
  }
}
