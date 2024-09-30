import { Pipe, PipeTransform } from '@angular/core';
import { ICustomerResponse } from 'src/app/core/interfaces/add-edit-project.interface';

@Pipe({
  name: 'filterClient'
})
export class FilterClientPipe implements PipeTransform {

  transform(value: ICustomerResponse[], ...args: string[]): ICustomerResponse[] {
    return value.filter(client => client.name.toLowerCase().includes(args[0].toLowerCase()));
  }

}
