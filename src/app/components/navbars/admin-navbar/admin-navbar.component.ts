import { Component, OnInit ,EventEmitter,Output } from "@angular/core";



@Component({
  selector: "app-admin-navbar",
  templateUrl: "./admin-navbar.component.html",
})
export class AdminNavbarComponent implements OnInit{
@Output() onInput = new EventEmitter<string>();

  inputValue: string;
  
constructor() {}
ngOnInit(): void {
  
}
inputSearch(text: string){
 this.inputValue=text
}



}
