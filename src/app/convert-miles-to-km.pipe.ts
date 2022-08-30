import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMilesToKM'
})
export class ConvertMilesToKMPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // input validation that checks if there is a value inside the value parameter
    if(!value){
      return '';
    }
    if(args[0] == 'm'){
      return parseFloat(value) * 1609.34;
    }
    else if(args[0]=='km'){
      return parseFloat(value) * 1.60934;
    }
    else if (args[0]== 'cm'){
      return parseFloat(value) * 160934;
    }
    else{
      throw new Error('Target unit not supported')
    }

    return parseFloat(value) * 1.60934;

  }

}
