import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoList } from './po-list';

describe('PoList', () => {
  let component: PoList;
  let fixture: ComponentFixture<PoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
