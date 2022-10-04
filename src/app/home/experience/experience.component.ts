import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  animations: [
    trigger('rightImg1smAnimation', [
      state(
        'show-img1sm',
        style({
          opacity: 1,
          transform: '*',
        })
      ),
      state(
        'hide-img1sm',
        style({
          opacity: 0,
          transform: 'translateX(100%)',
        })
      ),
      transition('hide-img1sm => show-img1sm', animate('1000ms ease-in-out')),
    ]),
    trigger('rightImg2smAnimation', [
      state(
        'show-img2sm',
        style({
          opacity: 1,
          transform: '*',
        })
      ),
      state(
        'hide-img2sm',
        style({
          opacity: 0,
          transform: 'translateX(100%)',
        })
      ),
      transition('hide-img2sm => show-img2sm', animate('1000ms ease-in-out')),
    ]),
    trigger('rightImg3smAnimation', [
      state(
        'show-img3sm',
        style({
          opacity: 1,
          transform: '*',
        })
      ),
      state(
        'hide-img3sm',
        style({
          opacity: 0,
          transform: 'translateX(100%)',
        })
      ),
      transition('hide-img3sm => show-img3sm', animate('1000ms ease-in-out')),
    ]),
    trigger('rightImg4smAnimation', [
      state(
        'show-img4sm',
        style({
          opacity: 1,
          transform: '*',
        })
      ),
      state(
        'hide-img4sm',
        style({
          opacity: 0,
          transform: 'translateX(100%)',
        })
      ),
      transition('hide-img4sm => show-img4sm', animate('1000ms ease-in-out')),
    ]),
    trigger('rightImg5smAnimation', [
      state(
        'show-img5sm',
        style({
          opacity: 1,
          transform: '*',
        })
      ),
      state(
        'hide-img5sm',
        style({
          opacity: 0,
          transform: 'translateX(100%)',
        })
      ),
      transition('hide-img5sm => show-img5sm', animate('1000ms ease-in-out')),
    ]),
    trigger('rightImg6smAnimation', [
      state(
        'show-img6sm',
        style({
          opacity: 1,
          transform: '*',
        })
      ),
      state(
        'hide-img6sm',
        style({
          opacity: 0,
          transform: 'translateX(100%)',
        })
      ),
      transition('hide-img6sm => show-img6sm', animate('1000ms ease-in-out')),
    ]),
  ],
})
export class ExperienceComponent implements OnInit {
  @ViewChild('imgEl1sm') public img1smEl?: ElementRef;
  @ViewChild('imgEl2sm') public img2smEl?: ElementRef;
  @ViewChild('imgEl3sm') public img3smEl?: ElementRef;
  @ViewChild('imgEl4sm') public img4smEl?: ElementRef;
  @ViewChild('imgEl5sm') public img5smEl?: ElementRef;
  @ViewChild('imgEl6sm') public img6smEl?: ElementRef;

  img1sm = 'hide-img1sm';
  img2sm = 'hide-img2sm';
  img3sm = 'hide-img3sm';
  img4sm = 'hide-img4sm';
  img5sm = 'hide-img5sm';
  img6sm = 'hide-img6sm';

  constructor() {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const img1SmPosition = this.img1smEl?.nativeElement.offsetTop;
    const img2SmPosition = this.img2smEl?.nativeElement.offsetTop;
    const img3SmPosition = this.img3smEl?.nativeElement.offsetTop;
    const img4SmPosition = this.img4smEl?.nativeElement.offsetTop;
    const img5SmPosition = this.img5smEl?.nativeElement.offsetTop;
    const img6SmPosition = this.img6smEl?.nativeElement.offsetTop;

    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= img1SmPosition - 700) {
      this.img1sm = 'show-img1sm';
    }
    if (scrollPosition >= img2SmPosition - 700) {
      this.img2sm = 'show-img2sm';
    }
    if (scrollPosition >= img3SmPosition - 600) {
      this.img3sm = 'show-img3sm';
    }
    if (scrollPosition >= img4SmPosition - 600) {
      this.img4sm = 'show-img4sm';
    }
    if (scrollPosition >= img5SmPosition - 700) {
      this.img5sm = 'show-img5sm';
    }
    if (scrollPosition >= img6SmPosition - 600) {
      this.img6sm = 'show-img6sm';
    }
  }

  ngOnInit(): void {}
}
