"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVendaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_venda_dto_1 = require("./create-venda.dto");
class UpdateVendaDto extends (0, mapped_types_1.PartialType)(create_venda_dto_1.CreateVendaDto) {
}
exports.UpdateVendaDto = UpdateVendaDto;
//# sourceMappingURL=update-venda.dto.js.map