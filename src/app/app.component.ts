import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService, set } from './api.service';
import { LoaderService } from './loader/loader.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public dataSet: set;
  dataForm: FormGroup;
  company_type = new FormControl('company_type');
  date_incorporated = new FormControl('date_incorporated');

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, public loaderService: LoaderService, private toastr: ToastrService) {}

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      company_type: ['', Validators.required],
      date_incorporated: ['', Validators.required]
    });
  }

  submit() {
    this.apiService.fetchData(this.dataForm.value.company_type, this.dataForm.value.date_incorporated).subscribe((res)=>{
      this.dataSet = res; 
      if (res) {
        this.toastr.success('Data fetched successfully', 'Success', {
          timeOut: 3000,
          positionClass: 'toast-top-right'
        });
      } else {
        this.toastr.error('Data not found', 'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-right'
        });
      }
		})
  }

  calcDate(x: any) {
    const resDate = x.valueOf();
    const currentDate = new Date().valueOf();
    const diffTime = Math.abs(currentDate - resDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (resDate <= currentDate) {
      return `-${diffDays}`;
    } else {
      return `${diffDays}`;
    }
  }
}

