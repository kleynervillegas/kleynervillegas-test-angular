import { TestBed } from '@angular/core/testing';
import { EmpleadosService } from './empleados.service';
describe('EmpleadosService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(EmpleadosService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=empleados.service.spec.js.map