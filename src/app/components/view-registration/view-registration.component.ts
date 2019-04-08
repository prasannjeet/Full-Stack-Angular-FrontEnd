import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.scss']
})
export class ViewRegistrationComponent implements OnInit {

  public bikeReg;

  constructor(private bikeService: BikeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBikeReg(this.route.snapshot.params.id);
  }

  getBikeReg(id: number) {
    this.bikeService.getBike(id).subscribe(
      data => {
        this.bikeReg = data;
        console.log(this.bikeReg.email === undefined);
        console.log('Raw Output Purchase Date: ' + '\n' + JSON.stringify(this.bikeReg.email));
      },
      err => console.error(err),
      () => console.log('bikes loaded')
    );
  }

}
