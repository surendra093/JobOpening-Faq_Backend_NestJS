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
import { FaqsService } from './faqs.service';

  
  @Controller('faqs')
  export class FaqsController {
    constructor(private readonly faqsService:FaqsService) {}
  
    @Post()
    @ApiOperation({summary:'Get my faqs'})
    async addFaq(@Body() body){
          const generatedId = await this.faqsService.insertFaq(body);

          return {id: generatedId};
    }
  
    @Get()
    async getAllFaqs() {
      const faqs = await this.faqsService.getFaqs();
      return faqs;
    }
  
    /*    
    @Get(':id')
    getCatagory(@Param('id') catagoryId: string) {
      return this.catagoriesService.getSingleCatagory(catagoryId);
    }*/
  
    @Patch(':id')
    async updateFaq(@Param('id') faqId: string,@Body() body){
        await this.faqsService.updateFaq(faqId,body);
        return null;
    }
  
    @Delete(':id')
    async deleteFaq(@Param('id') faqId: string) {
        await this.faqsService.deleteFaq(faqId);
        return null;
    }
  }