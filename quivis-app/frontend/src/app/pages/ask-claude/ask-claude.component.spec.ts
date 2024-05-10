import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskClaudeComponent } from './ask-claude.component';

describe('AskClaudeComponent', () => {
  let component: AskClaudeComponent;
  let fixture: ComponentFixture<AskClaudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AskClaudeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AskClaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
