/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { BankTestModule } from '../../../test.module';
import { EmpruntDeleteDialogComponent } from 'app/entities/emprunt/emprunt-delete-dialog.component';
import { EmpruntService } from 'app/entities/emprunt/emprunt.service';

describe('Component Tests', () => {
    describe('Emprunt Management Delete Component', () => {
        let comp: EmpruntDeleteDialogComponent;
        let fixture: ComponentFixture<EmpruntDeleteDialogComponent>;
        let service: EmpruntService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [BankTestModule],
                declarations: [EmpruntDeleteDialogComponent]
            })
                .overrideTemplate(EmpruntDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(EmpruntDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(EmpruntService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it(
                'Should call delete service on confirmDelete',
                inject(
                    [],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });
});
