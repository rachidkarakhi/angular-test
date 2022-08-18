import { Component, OnInit, Input , EventEmitter , Output} from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() active: string;
  @Input() categories: string[];
  constructor(private commonService :CommonService) { }
  updateActive(categorie:string) {
    sessionStorage.setItem('active', categorie);
    this.active=categorie;
   this.commonService.sendEvent(categorie)
  }
  ngOnInit(): void {
   sessionStorage.setItem('active', this.active);
  }
  filter(option:string){
    console.log(option);
  }
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
}
