import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddeditProjectFormService } from '../../services/addedit-project-form.service';
import { ICustomerResponse } from 'src/app/core/interfaces/add-edit-project.interface';
import { AddeditProjectApiService } from '../../services/addedit-project-api.service';
import { MatDialog } from '@angular/material/dialog';
import { AddClientComponent } from '../add-client/add-client.component';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit, OnDestroy {
  clientList: ICustomerResponse[] = [];
  searchClient: string = '';
  destroy$ = new Subject<void>();
  constructor(private projectFormService: AddeditProjectFormService, private projectApiService: AddeditProjectApiService, private dialog: MatDialog, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectApiService.getAllCustomers().subscribe((res) => this.clientList = res?.result);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  get generalForm() {
    return this.projectFormService.getGeneralForm();
  }

  nextRouter() {
    if (this.projectFormService.projectForm.valid) {
      this.router.navigate(['../team',], { relativeTo: this.route });
    }
  }

  handleNewClient() {
    const dialogRef = this.dialog.open(AddClientComponent, {
      width: '400px',
      height: 'auto',
    });
    dialogRef.componentInstance.clientAdded.pipe(takeUntil(this.destroy$)).subscribe((client) => {
      this.clientList = [client, ...this.clientList];
    });
  }
}
