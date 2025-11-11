import { Plugin } from './../../../node_modules/esbuild/lib/main.d';
import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import 'ag-grid-community/styles/ag-grid.css'; // Core Grid CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Optional Theme CSS
@Component({
  selector: 'app-ag-grid-component',
  imports: [AgGridAngular],
  templateUrl: './ag-grid-component.html',
  styleUrl: './ag-grid-component.scss'
})
export class AgGridComponent {
  pagination = true
  paginationSize = 10
  paginationPageSizeSelector = [10, 20]
  defaultColDef: ColDef = {
    flex: 2,
    filter: true,
    floatingFilter: true,

    }
  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Chevrolet", model: "Silverado", price: 41000, electric: false },
    { make: "Honda", model: "Civic", price: 25000, electric: false },
    { make: "BMW", model: "i4", price: 56000, electric: true },
    { make: "Hyundai", model: "Ioniq 5", price: 48000, electric: true },
    { make: "Volkswagen", model: "Golf", price: 23000, electric: false },
    { make: "Nissan", model: "Leaf", price: 32000, electric: true },
    { make: "Kia", model: "EV6", price: 47000, electric: true },
    { make: "Mercedes-Benz", model: "EQB", price: 55000, electric: true },
    { make: "Audi", model: "A4", price: 42000, electric: false },
    { make: "Jeep", model: "Wrangler", price: 39000, electric: false },
    { make: "Porsche", model: "Taycan", price: 90000, electric: true },
    { make: "Subaru", model: "Outback", price: 34000, electric: false },
    { make: "Mazda", model: "CX-5", price: 31000, electric: false },
    { make: "Lucid", model: "Air", price: 82000, electric: true },
    { make: "Rivian", model: "R1T", price: 73000, electric: true },
    { make: "Volvo", model: "XC40 Recharge", price: 54000, electric: true },
    { make: "Peugeot", model: "208", price: 22000, electric: false },
    { make: "Fiat", model: "500e", price: 21000, electric: true },
    { make: "Renault", model: "Zoe", price: 23000, electric: true },
    { make: "Opel", model: "Corsa", price: 20000, electric: false },
    { make: "Skoda", model: "Octavia", price: 24000, electric: false },
    { make: "Seat", model: "Ibiza", price: 19000, electric: false },
    { make: "Mini", model: "Cooper SE", price: 30000, electric: true },
    { make: "Jaguar", model: "I-Pace", price: 70000, electric: true },
    { make: "Land Rover", model: "Defender", price: 65000, electric: false },
    { make: "Citroen", model: "C3", price: 18000, electric: false },
    { make: "Dacia", model: "Spring", price: 17000, electric: true },
    { make: "Suzuki", model: "Swift", price: 16000, electric: false },
    { make: "Mitsubishi", model: "Outlander", price: 35000, electric: false },
    { make: "Chrysler", model: "Pacifica", price: 37000, electric: false },
    { make: "Dodge", model: "Charger", price: 32000, electric: false },
    { make: "Ram", model: "1500", price: 45000, electric: false },
    { make: "Buick", model: "Encore", price: 27000, electric: false },
    { make: "GMC", model: "Sierra", price: 52000, electric: false },
    { make: "Infiniti", model: "Q50", price: 41000, electric: false },
    { make: "Acura", model: "TLX", price: 39000, electric: false },
    { make: "Lexus", model: "UX 300e", price: 43000, electric: true },
    { make: "Genesis", model: "GV60", price: 58000, electric: true },
    { make: "Alfa Romeo", model: "Giulia", price: 42000, electric: false },
    { make: "Saab", model: "9-3", price: 15000, electric: false },
    { make: "Smart", model: "EQ ForTwo", price: 17000, electric: true },
    { make: "BYD", model: "Han EV", price: 35000, electric: true },
    { make: "Great Wall", model: "Ora Good Cat", price: 22000, electric: true },
    { make: "Tata", model: "Nexon EV", price: 18000, electric: true },
    { make: "Mahindra", model: "eVerito", price: 16000, electric: true },
    { make: "Proton", model: "Saga", price: 12000, electric: false },
    { make: "Perodua", model: "Myvi", price: 11000, electric: false },
    { make: "Holden", model: "Commodore", price: 25000, electric: false }
  ];


    // Column Definitions: Defines the columns to be displayed.
    colDefs: ColDef[] = [
        {
          valueGetter: (params) => params.data.make.toUpperCase(),
          headerName: 'custom-header-Name'
        },
        { field: "model" },
        { field: "price" },
        { field: "electric" }
    ];
}
