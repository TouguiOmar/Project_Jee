import { TestBed } from '@angular/core/testing';

import { KeycloakServiceService } from './keycloak-service.service';

describe('KeycloakServiceService', () => {
  let service: KeycloakServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeycloakServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
