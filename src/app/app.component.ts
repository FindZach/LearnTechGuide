import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Carousel, Dropdown, initTE, Collapse, Ripple} from 'tw-elements';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  ngOnInit() {
    initTE({ Carousel, Dropdown, Collapse, Ripple });
  }

  constructor(protected themeService: ThemeService) {
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {

  }
}
