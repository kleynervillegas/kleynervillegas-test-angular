import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { Empleados } from '../../models/empleados';
let EmpleadosComponent = class EmpleadosComponent {
    constructor(empleadosService) {
        this.empleadosService = empleadosService;
    }
    ngOnInit() {
        this.getEmployees();
    }
    addEmployee(form) {
        // console.log(form.value);
        if (form.value._id) {
            this.empleadosService.putEmployee(form.value)
                .subscribe(res => {
                this.resetForm(form);
                M.toast({ html: 'Empleado Actualizado exitosamente' });
                this.getEmployees();
            });
        }
        else {
            this.empleadosService.postEmployee(form.value)
                .subscribe(res => {
                this.resetForm(form);
                M.toast({ html: 'Empleado Guardado exitosamente' });
                this.getEmployees();
            });
        }
    }
    getEmployees() {
        this.empleadosService.getEmployees()
            .subscribe(res => {
            this.empleadosService.employees = res;
            console.log(res);
        });
    }
    resetForm(form) {
        if (form) {
            form.reset();
            this.empleadosService.selectedEmployee = new Empleados();
        }
    }
    editEmployee(employee) {
        this.empleadosService.selectedEmployee = employee;
        console.log(employee._id);
    }
    deleteEmployee(_id) {
        if (confirm('desea eliminar este empleado')) {
            this.empleadosService.deleteEmploye(_id)
                .subscribe(res => {
                console.log(res);
                M.toast({ html: 'Empleado Eliminado exitosamente' });
                this.getEmployees();
            });
        }
    }
};
EmpleadosComponent = tslib_1.__decorate([
    Component({
        selector: 'app-empleados',
        templateUrl: './empleados.component.html',
        styleUrls: ['./empleados.component.css'],
        providers: [EmpleadosService]
    }),
    tslib_1.__metadata("design:paramtypes", [EmpleadosService])
], EmpleadosComponent);
export { EmpleadosComponent };
//# sourceMappingURL=empleados.component.js.map