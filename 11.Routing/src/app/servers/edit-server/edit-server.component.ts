import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { canComponentDeactivate } from 'src/app/can-deactivate-guard.service';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit, canComponentDeactivate {
  server: { id: number; name: string; status: string } | any;
  serverName = '';
  serverStatus = '';
  allowEdit: boolean = false;
  editSaved: boolean = true;
  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}
  canDeactivat(): boolean | Observable<boolean> | Promise<boolean> {
    console.log('DEAV');
    console.log(
      (this.server.name !== this.serverName ||
        this.serverStatus !== this.server.status) &&
        !this.editSaved
    );
    console.log(
      (this.server.name !== this.serverName ||
        this.serverStatus !== this.server.status) &&
        this.editSaved
    );
    console.log(true && false);

    if (!this.allowEdit) {
      return true;
    }
    if (
      (this.server.name !== this.serverName ||
        this.serverStatus !== this.server.status) &&
      this.editSaved
    ) {
      return confirm('Are sure need to leave?');
    } else {
      return true;
    }
  }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe((p) => {
      this.allowEdit = p['allowEdit'] === '1' ? true : false;
    });
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.editSaved = true;
  }
}
