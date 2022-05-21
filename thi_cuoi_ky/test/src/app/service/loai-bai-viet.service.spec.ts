import { TestBed } from '@angular/core/testing';

import { LoaiBaiVietService } from './loai-bai-viet.service';

describe('LoaiBaiVietService', () => {
  let service: LoaiBaiVietService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaiBaiVietService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
