import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; ///puder hacer cunsulatas al servidor
import { Empleados } from '../models/empleados'; ///modelo
let EmpleadosService = class EmpleadosService {
    constructor(http) {
        this.http = http;
        this.URL_API = 'http://localhost:3000/api/empleados'; //coneccion al servidor
        this.selectedEmployee = new Empleados();
    }
    getEmployees() {
        return this.http.get(this.URL_API);
        // .subscribe(data) returna loa datos
    }
    postEmployee(Emloyee) {
        return this.http.post(this.URL_API, Emloyee);
    }
    putEmployee(Emloyee) {
        return this.http.put(this.URL_API + `/${Emloyee._id}`, Emloyee);
    }
    deleteEmploye(_id) {
        return this.http.delete(this.URL_API + `/${_id}`);
    }
};
EmpleadosService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], EmpleadosService);
export { EmpleadosService };
//# sourceMappingURL=empleados.service.js.map