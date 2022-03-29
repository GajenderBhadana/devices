import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css'],
})
export class DeviceListComponent implements OnInit {
  devices: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any>('http://mdm.oasyscybernetics.in:9090/GetEnrollDevice')
      .subscribe((data) => {
        this.devices = data;
        console.log(data);
      });
  }

  deviceStatus() {}
}
