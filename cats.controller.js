import { Controller, Get } from '@nestjs/common';

const GATOS = [
  {
    id: 1,
    nome: "Franeudos",
    corOlhos: "verde",
    raça: "sphynx"
  }
]

@Controller('cats')
export class CatsController {
  @Get()
  findAll(){
    return 'Retorna todos os gatos'
  }
}
