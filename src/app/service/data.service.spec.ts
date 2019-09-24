import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

import {InMemoryDbService} from 'angular-in-memory-web-api'

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
