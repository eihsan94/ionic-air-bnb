import { async, TestBed, inject } from '@angular/core/testing';
import { HttpErrorHandlerService } from './handle-error.service';
import { MessageService } from '../service/message.service';

describe('HttpErrorHandlerService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ MessageService, HttpErrorHandlerService],
    });
  }));


  it('should be created', inject([HttpErrorHandlerService], (service: HttpErrorHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
