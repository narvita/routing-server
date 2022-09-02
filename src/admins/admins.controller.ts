import { Controller, Get } from '@nestjs/common';
import { AdminsService } from './admins.service';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Get()
  findAll() {
    console.log();

    return this.adminsService.findAll();
  }
}
