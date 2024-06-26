import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string) {
    if(value.length === 0 || filterString===''){
      return value;
    }
    // const users =[];
    // for(const user of value){
    //   if(user['name'] === filterString ){
    //     user.push(user);
    //   }
    // }

    return value.filter(user => user.name.toLowerCase().includes(filterString.toLowerCase()));
  }
}
