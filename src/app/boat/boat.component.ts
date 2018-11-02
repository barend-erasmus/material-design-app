import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.css'],
})
export class BoatComponent implements OnInit {
  public data: Array<any> = [
    { property: 'Hull Length', value: '20.37 (66.83 ft)' },
    { property: 'Length Waterline (design)', value: '20.00 m (65.61 ft)' },
    { property: 'Length Overall (inc. bowsprit)', value: '22.14 m (72.63 ft)' },
    { property: 'Hull Beam Overall', value: '5.60 m (18.37 ft)' },
    { property: 'Max Draft (Keel on CL)', value: '4.78 m (15.68 ft) ' },
    { property: 'Boat Weight (empty)', value: '12,500 kg (27,5557 lb)' },
    { property: 'Keel Arrangement', value: 'Canting keel to +/- 40 degrees with 5 degrees of incline axis' },
    { property: 'Daggerboards', value: 'Twin forward daggerboards, inboard triangulation' },
    { property: 'Rudders', value: 'Twin fixed rudders - composite stocks' },
    { property: 'Aft Water Ballast (Wing Tanks)', value: 'Twin 800L ballast tanks under cockpit sides at transom' },
    { property: 'Forward Water Ballast (CL)', value: 'Single centerline 1100L ballast tank forward of mast' },
    { property: 'Rig Height', value: '30.30 m (99.4 ft)' },
    { property: 'Rig Arrangement', value: 'Twin topmast backstays and checkstays with deflectors' },
    { property: 'Bowsprit Length', value: '2.14 m (7 ft)' },
    { property: 'Mainsail Area', value: '163 m<sup>2</sup>' },
    { property: 'Working Jib Area', value: '133 m<sup>2</sup>' },
    { property: 'Upwind Sail Area', value: '468 m<sup>2</sup> (mainsail and masthead Code 0)' },
    { property: 'Downwind Sail Area', value: '578 m<sup>2</sup> (mainsail and A3)' },
    { property: 'Engine', value: 'Volvo Penta D2-75 with S-drive ' },
  ];

  public displayedColumns: string[] = ['property', 'value'];

  constructor() {}

  public ngOnInit(): void {}
}
