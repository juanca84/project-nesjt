import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';

@Controller('libros')
export class LibrosController {
    @Get()
    obtenerLibros(): string{
        return 'Todos los libros';
    }

    @Post()
    crearLibro(): string {
        return 'Crear libro';
    }

    @Put()
    modificarLibro(): string {
        return 'Modificar libro';
    }

    @Delete()
    borrarLibro(): string {
        return 'Borrar libro';
    }
}
