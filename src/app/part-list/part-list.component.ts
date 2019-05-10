import { Component, OnInit } from '@angular/core';
import { PartService } from '../services/part.service';
import { Part } from '../models/part';
// @ts-ignore

@Component({
  selector: 'app-part-list',
  templateUrl: './part-list.component.html',
  styleUrls: ['./part-list.component.scss']
})
export class PartListComponent implements OnInit {

  displayedColumns : string[] = ['id', 'name', 'quantity']
  dataSource = []
  newPart = new Part('', '')

  constructor(private partService: PartService) { }

  ngOnInit() {
  
    this.fetchParts()
  }

  fetchParts() {
    this.partService.getFirstPage().subscribe((data: Array<object>) => {
      this.dataSource = data
      console.log(data)
    })
  }

  postPart(part: Part){
    console.log('comp', part)
    this.partService.addPart(part)
    this.dataSource.push(part)
  }

}
