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

    @Put(':id')
    modificarLibro(@Param('id') idLibro: string): string {
        return `Modificar libro ${idLibro}`;
    }

    @Delete(':id')
    borrarLibro(@Param('id') idLibro: string): string {
        return `Borrar libro ${idLibro}`;
    }
}
