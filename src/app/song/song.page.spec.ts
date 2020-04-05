// Simo Partanen 1900414
// Inessa Rif    1901057
// Daniel Rif    1901058

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SongPage } from './song.page';

describe('SongPage', () => {
  let component: SongPage;
  let fixture: ComponentFixture<SongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
