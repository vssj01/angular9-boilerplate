import { Component, OnInit, Input } from '@angular/core';
import { WorkslistService } from '@app/shared/services/workslist.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.scss'],
})
export class SearchSectionComponent implements OnInit {
  @Input() selectedItems = [];
  title = 'angular-ops-worklist';
  isCollapsed = false;
  dropdownSettings = {};
  getData: any;
  workListGroup: FormGroup;
  locations: any;
  constructor(public workslist: WorkslistService) {}
  ngOnInit() {
    this.workListGroup = new FormGroup({
      medicalCompliance: new FormControl('all'),
      expiryDate: new FormControl('30'),
      team: new FormControl(''),
      office: new FormControl('primary'),
      discipline: new FormControl('all'),
      caregiverName: new FormControl(''),
      branch: new FormControl(''),
      location: new FormControl('location1'),
    });
    this.workslist.getWorksListData().subscribe((res: any) => {
      this.getData = res;
      console.log(this.getData);
    });
  }
  onSubmit() {
    if (this.isCollapsed) {
      console.log(this.workListGroup.value);
    } else {
      let office = this.workListGroup.get('office').value;
      let medical = this.workListGroup.get('medicalCompliance').value;
      let expiryDate = this.workListGroup.get('expiryDate').value;
      this.dropdownSettings = {
        office,
        medical,
        expiryDate,
      };
      console.log(this.dropdownSettings);
    }
  }
}
