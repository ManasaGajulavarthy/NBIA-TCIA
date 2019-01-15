import { TestBed, inject } from '@angular/core/testing';
import { PersistenceService } from '../common/services/persistence.service';

import { CartSortService } from './cart-sort.service';
import { CookieService } from 'angular2-cookie/core';

describe( 'CartSortService', () => {

    beforeEach( () => {
        TestBed.configureTestingModule( {
            providers: [CartSortService, PersistenceService, CookieService]
        } );
    } );

    it( 'should be created', inject( [CartSortService], ( service: CartSortService ) => {
        expect( service ).toBeTruthy();
    } ) );
} );
