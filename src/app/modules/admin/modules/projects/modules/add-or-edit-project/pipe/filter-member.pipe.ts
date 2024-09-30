import { Pipe, PipeTransform } from '@angular/core';
import { ETeamTypeId } from 'src/app/core/enums/team.enums';
import { IUserNotPaddingResponse } from 'src/app/core/interfaces/add-edit-project.interface';

@Pipe({
  name: 'filterMember'
})
export class FilterMemberPipe implements PipeTransform {

  transform(value: IUserNotPaddingResponse[], ...args: [string, number, string]): IUserNotPaddingResponse[] {
    const [selectedBranch, selectedType, searchUser] = args;
    let result = value;
    if (selectedBranch != 'All') {
      result = result.filter(member => member.branchDisplayName === selectedBranch);
    }

    if (selectedType !== ETeamTypeId.All) {
      result = result.filter(member => member.type === selectedType);
    }

    if (searchUser) {
      result = result.filter(member => member.name.toLowerCase().includes(searchUser.toLowerCase()));
    }

    return result;
  }
}
