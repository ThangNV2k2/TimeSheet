import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ICustomerResponse, ICustomerSaveRequest } from 'src/app/core/interfaces/add-edit-project.interface';
import { AddeditProjectApiService } from '../../services/addedit-project-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent {
  clientForm = this.fb.group({
    nameClient: ['', Validators.required],
    codeClient: ['', Validators.required],
    addressClient: ['', Validators.required],
  });
  clientAdded = new EventEmitter<ICustomerResponse>();
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AddClientComponent>, private projectApiService: AddeditProjectApiService) { }

  handleSaveClient() {
    if (this.clientForm.value.nameClient && this.clientForm.value.codeClient && this.clientForm.value.addressClient) {
      const client: ICustomerSaveRequest = {
        name: this.clientForm?.value?.nameClient.toString(),
        code: this.clientForm.value.codeClient.toString(),
        address: this.clientForm.value.addressClient.toString()
      };
      this.projectApiService.saveCustomer(client).subscribe({
        next: (response) => {
          Swal.fire({
            icon: 'success',
            text: 'Add client successfully',
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 2000,
          });
          const client: ICustomerResponse = {
            name: response?.result.name,
            code: response?.result.code.toString(),
            id: response?.result.id
          };
          this.clientAdded.emit(client);
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            text: err.error.error.message,
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
    }
    this.dialogRef.close();
  }

}
