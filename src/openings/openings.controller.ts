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
import { OpeningsService } from './openings.service';

  
  @Controller('openings')
  export class OpeningsController {
    constructor(private readonly openingsService: OpeningsService) {}
  
    @Post()
    @ApiOperation({summary:'Get my openings'})
    async addOpening(@Body() body){
          const generatedId = await this.openingsService.insertOpening(body);

          return {id: generatedId};
    }
  
    @Get()
    async getAllOpenings() {
      const openings = await this.openingsService.getOpenings();
      return openings;
    }
  
    @Get(':id')
    getOpening(@Param('id') openId: string) {
      return this.openingsService.getSingleOpening(openId);
    }
  
    @Patch(':id')
    async updateOpening(@Param('id') openId: string,@Body() body){
        await this.openingsService.updateOpening(openId,body);
        return null;
    }
  
    @Delete(':id')
    async deleteOpening(@Param('id') openId: string) {
        await this.openingsService.deleteOpening(openId);
        return null;
    }
  }