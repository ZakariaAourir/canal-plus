import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { ToastrService } from 'ngx-toastr';
import { FakeService } from '../../custom-service/fake.service';


@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {

  settings = {
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    actions: {
      add: false,
      delete: false
    },
    mode: 'external',
    columns: {
      originalTitle: {
        title: 'Original Title'
      },
      primaryTitle: {
        title: 'Primary Title'
      },
      genres: {
        title: 'Genres'
      },
      runtimeMinutes: {
        title: 'Runtime Minutes'
      },
      startYear: {
        title: 'Start Year'
      },
      titleType: {
        title: 'Title Type'
      },
      isAdult: {
        title: 'Is Adult'
      },
    }
  };
  data:any;
  userArray:any;
  editForm: FormGroup;
  selectedData:any;

  constructor(
    private fakeService: FakeService, 
    private toastr:ToastrService,
    private dialogService: NbDialogService,
    private formBuilder: FormBuilder
    ) {}
  
  ngOnInit(): void {
    this.getAllData();
    this.initForm();
  }

  /**
   * get all data
   * */ 
  getAllData() {
    this.fakeService.data().subscribe(
      (response) => {
        this.data = response.default;
        this.toastr.success("Data imported succesfully");
      }, (error) => {
        this.toastr.error(error);
      }
    )
  }

  /**
   * init the edit inner pipe data form
   * */ 
   initForm() {
    this.editForm = this.formBuilder.group({
      title: [''],
      year: [''],
      genre: ['']
    });
  }

  /**
   * prepare data to be edited & open dialog
   * */ 
  edit(dialog:TemplateRef<any>, event) {
    this.selectedData = event?.data;
    let editData = {
      title: event?.data?.originalTitle ? event?.data?.originalTitle : "",
      year: event?.data?.startYear ? event?.data?.startYear : "",
      genre: event?.data?.genres ? event?.data?.genres : "",
    };
    debugger
    this.editForm.patchValue(editData);
    debugger
    console.log(event);
    this.dialogService.open(dialog);
  }

  /**
   * close the edit dialog
   * */ 
   closeEdit(ref) {
    ref.close();
  }

  /**
   * function to edit the inner pipe data - add service here
   * */ 
   confirmEdit(refEdit) {
    let payload = {
      originalTitle : this.editForm.value.title,  
      startYear: this.editForm.value.year,  
      genres:this.editForm.value.genre,  
    };
    this.fakeService.updateData(payload, this.selectedData.tconst).subscribe(
      (response) => {
        this.toastr.success("Data is updated succesfully");
        refEdit.close();
      }, (error) => {
        this.toastr.error(error);
      }
    )
  }

}
