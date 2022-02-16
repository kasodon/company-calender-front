import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public dataSet = [];
  dataForm: FormGroup;
  company_type = new FormControl('company_type');
  date_incorporated = new FormControl('date_incorporated');

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {}

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      company_type: ['', Validators.required],
      date_incorporated: ['', Validators.required]
    });
    this.dataForm.valueChanges.subscribe(data => console.log(data));
  }

  submit() {
    console.log(this.dataForm.value);
    this.apiService.fetchData(this.dataForm.value.company_type, this.dataForm.value.date_incorporated).subscribe((res)=>{  
			console.log(res); 
		})
  }
}

