import { Component, OnInit, Input , EventEmitter , Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() active: string;
  @Input() categories: string[];
  @Output() changeActive = new EventEmitter();
  constructor() { }
  updateActive(categorie:string) {
    sessionStorage.setItem('active', categorie);
    this.changeActive.emit();
  }
  ngOnInit(): void {
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
