import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ride'
})
export class RidePipe implements PipeTransform {

  transform(value: any[], args: any): any {
    if(args=="to"){
     return value.filter(p=>p.end=="Gotham")
    }
    else if(args=="from"){
      return value.filter(p=>p.start=="Gotham")
    }
    return value;
  }

}
