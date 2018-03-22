import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [DataService]
})
export class AppComponent implements OnInit {
    title = 'Assignment is a fun...';
    /* originalEmployees: any = [
        {
            "name": "Jon",
            "joining_date": "23/10/2015",
            "age": 23
        },
        {
            "name": "Viki",
            "joining_date": "24/01/2015",
            "age": 20
        },
        {
            "name": "Abc",
            "joining_date": "25/10/2015",
            "age": 43
        },
        {
            "name": "XYZ",
            "joining_date": "28/10/2015",
            "age": 21
        }
    ]; */
    employees: any;
    searchText: string = "";

    constructor(private dataService: DataService) {
        this.employees = Array.prototype.slice.call(this.dataService.getEmployees());
    }

    ngOnInit() {
        let self = this;
        let intervalId = setInterval(() => {

            let totalEmps = self.employees.length;
            if (self.employees.length < 8) {
                let emp = self.employees[totalEmps - 4];
                let newEmp: any = {};
                newEmp['name'] = emp.name;
                let age: any = emp.age;
                age = age.toString();
                newEmp['age'] = parseInt(age.split('').reverse().join(''));

                let dateArr = emp.joining_date.split('/');
                let date = new Date(parseInt(dateArr[2]), parseInt(dateArr[1]) - 1, parseInt(dateArr[0]));
                date.setDate(date.getDate() + 1);
                newEmp['joining_date'] = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
                self.employees.push(newEmp);
            } else {
                self.dataService.updateEmpList(self.employees);
                clearInterval(intervalId);
            }
        }, 1000);
    }

    sortByDate() {

        this.employees.sort(function (emp1, emp2) {
            let arr1 = emp1.joining_date.split("/");
            let arr2 = emp2.joining_date.split("/");

            let date1: any = new Date(parseInt(arr1[2]), parseInt(arr1[1]) - 1, parseInt(arr1[0]));
            let date2: any = new Date(parseInt(arr2[2]), parseInt(arr2[1]) - 1, parseInt(arr2[0]));

            return date1 - date2;
        });

    }

    searchHandler(event) {

        let self = this;
        self.debounce(() => {
            let emps = [];
            self.dataService.originalEmployees.forEach(element => {
                if (element.name.toLowerCase().indexOf(self.searchText.toLocaleLowerCase()) >= 0) {
                    emps.push(element);
                }
            });
            self.employees = emps;
        }, 500)();
    }

    debounce(fn, delay: number) {

        let timeoutId;
        return function (...args) {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                fn(...args);
                timeoutId = null;
            }, delay);
        }
    }
}
