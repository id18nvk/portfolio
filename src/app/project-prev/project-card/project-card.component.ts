import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() title: string | undefined = "";
  @Input() image: string | undefined= "demo";
  @Input() id: number | undefined;
  category: string | undefined= "category";
  date: string | undefined= "xxx-xx-xx";



  constructor() { }

  ngOnInit(): void {
  }

}
