import { Component, OnInit } from '@angular/core';
import { Materials } from './../../_shared/materials';
import { MATERIALS } from './../../_shared/mock-materials';
import { FilterPipe } from './../../_pipes/filter.pipe';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {
  queryString: string;
  materials = MATERIALS;

  constructor() {
    this.queryString = '';
   }

  ngOnInit() {
  }

}
