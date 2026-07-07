"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const vendedorSelect = { id: true, nome: true, email: true, role: true };
let VendasService = class VendasService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createVendaDto) {
        return this.prisma.venda.create({
            data: createVendaDto,
            include: { cliente: true, vendedor: { select: vendedorSelect } },
        });
    }
    findAll() {
        return this.prisma.venda.findMany({
            include: { cliente: true, vendedor: { select: vendedorSelect } },
        });
    }
    async findOne(id) {
        const venda = await this.prisma.venda.findUnique({
            where: { id },
            include: { cliente: true, vendedor: { select: vendedorSelect } },
        });
        if (!venda)
            throw new common_1.NotFoundException('Venda não encontrada');
        return venda;
    }
    update(id, updateVendaDto) {
        return this.prisma.venda.update({
            where: { id },
            data: updateVendaDto,
        });
    }
    remove(id) {
        return this.prisma.venda.delete({ where: { id } });
    }
};
exports.VendasService = VendasService;
exports.VendasService = VendasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VendasService);
//# sourceMappingURL=vendas.service.js.map