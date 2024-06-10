import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { HostService } from './host.service';
import { CreateHostDto } from './dto/create-host.dto';
import { UpdateHostDto } from './dto/update-host.dto';
import { ApiBadRequestResponse, ApiBearerAuth, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from '@prisma/client';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { AccessTokenGuard } from 'src/auth/guards';

@ApiTags('Host')
@ApiBearerAuth()
@ApiUnauthorizedResponse({ description: 'Unauthorized: Login first!' })
@UseGuards(AccessTokenGuard, RolesGuard)
@Controller('host')
export class HostController {
  constructor(private readonly hostService: HostService) {}


  @Roles(Role.ADMIN)
  @ApiOperation({summary: 'Create new host!'})
  @ApiCreatedResponse({description: 'Create new host successfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})

  @Post()
  create(@Body() createHostDto: CreateHostDto) {
    return this.hostService.create(createHostDto);
  }

  @ApiOperation({summary: 'Get all hosts!'})
  @ApiCreatedResponse({description: 'Get all hosts successfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Get()
  findAll() {
    return this.hostService.findAll();
  }

  @ApiOperation({summary: 'Get host by id!'})
  @ApiCreatedResponse({description: 'Get host by id successfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Get('/:{id}') 
  findOne(@Param('id') id: string) {
    return this.hostService.findOne(id);
  }

  @ApiOperation({summary: 'Update host by id!'})
  @ApiCreatedResponse({description: 'Update host by id successfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Patch('/:{id}')
  update(@Param('id') id: string, @Body() updateHostDto: UpdateHostDto) {
    return this.hostService.update(id, updateHostDto);
  }

  @ApiOperation({summary: 'Delete host by id!'})
  @ApiCreatedResponse({description: 'Delete host by idsuccessfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Delete('/:{id}')  
  remove(@Param('id') id: string) {
    return this.hostService.remove(id);
  }
}
