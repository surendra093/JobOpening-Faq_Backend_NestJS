import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete
  } from '@nestjs/common';
  
import { ApiOperation } from '@nestjs/swagger';
import { CatagoriesService } from './catagories.service';

  
  @Controller('catagories')
  export class CatagoriesController {
    constructor(private readonly catagoriesService:CatagoriesService) {}
  
    @Post()
    @ApiOperation({summary:'Get my catagories'})
    async addCatagory(@Body() body){
          const generatedId = await this.catagoriesService.insertCatagory(body);

          return {id: generatedId};
    }
  
    @Get()
    async getAllCatagories() {
      const catagories = await this.catagoriesService.getCatagories();
      return catagories;
    }
  
    /*    
    @Get(':id')
    getCatagory(@Param('id') catagoryId: string) {
      return this.catagoriesService.getSingleCatagory(catagoryId);
    }*/
  
    @Patch(':id')
    async updateCatagory(@Param('id') catagoryId: string,@Body() body){
        await this.catagoriesService.updateCatagory(catagoryId,body);
        return null;
    }
  
    @Delete(':id')
    async deleteCatagory(@Param('id') catagoryId: string) {
        await this.catagoriesService.deleteCatagory(catagoryId);
        return null;
    }
  }