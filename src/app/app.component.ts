import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';
  name: string='';
  amount: number |undefined;
  date: string | undefined;
  height: number|undefined;
  miles: string|undefined;  
  car={
    make: 'mazda',
    model: '3i',
    year: 2007
  };

  onNameChange(value: string){
    console.log("from inside func" +value)
    this.name= value;
  }
  onAmountChange(e: Event){
    this.amount = parseFloat((e.target as HTMLInputElement).value)
    console.log("from inside func" + this.amount);
  }
  onDateChange(e: Event){
    this.date =(e.target as HTMLInputElement).value
    console.log("from inside func" + this.date);
  }
  onHeightChange(e: Event){
    this.height =parseFloat((e.target as HTMLInputElement).value)  
  }
  onMilesChange(e: Event){
    this.miles= (e.target as HTMLInputElement).value 
  }

}
