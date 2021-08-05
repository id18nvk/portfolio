import { Injectable } from '@angular/core';
import { IProject } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProducts(): IProject[] {
    return [
      {
        "id": 1,
        "projectTitle": "project 1",
        "projectDate": "xxxx-xx-xx",
        "imageUrl": "https://www.freemockupworld.com/wp-content/uploads/2020/11/App-Screen-UI-Showcase-Mockup-01.jpg",
        "projectCategory": "UX",
      },{
        "id": 2,
        "projectTitle": "project 2",
        "projectDate": "xxxx-xx-xx",
        "imageUrl": "https://cdn.dribbble.com/users/1376399/screenshots/5773006/attachments/1245274/mockup-10.jpg",
        "projectCategory": "UX",
      },{
        "id": 3,
        "projectTitle": "project 3",
        "projectDate": "xxxx-xx-xx",
        "imageUrl": "https://www.mockupdaddy.com/wp-content/uploads/edd/2019/09/iPhone-11-Pro-Isometric-Ui-Mockup.jpg",
        "projectCategory": "UX",
      },{
        "id": 4,
        "projectTitle": "project 4",
        "projectDate": "xxxx-xx-xx",
        "imageUrl": "https://cdn.dribbble.com/users/1376399/screenshots/5773006/attachments/1245274/mockup-10.jpg",
        "projectCategory": "UX",
      },{
        "id": 5,
        "projectTitle": "project 5",
        "projectDate": "xxxx-xx-xx",
        "imageUrl": "https://www.freemockupworld.com/wp-content/uploads/2020/11/App-Screen-UI-Showcase-Mockup-01.jpg",
        "projectCategory": "UX",
      },{
        "id": 6,
        "projectTitle": "project 6",
        "projectDate": "xxxx-xx-xx",
        "imageUrl": "https://www.mockupdaddy.com/wp-content/uploads/edd/2019/09/iPhone-11-Pro-Isometric-Ui-Mockup.jpg",
        "projectCategory": "UX",
      },
    ]
  }
}
