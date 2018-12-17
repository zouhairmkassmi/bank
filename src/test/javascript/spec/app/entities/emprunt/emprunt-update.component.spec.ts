/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { BankTestModule } from '../../../test.module';
import { EmpruntUpdateComponent } from 'app/entities/emprunt/emprunt-update.component';
import { EmpruntService } from 'app/entities/emprunt/emprunt.service';
import { Emprunt } from 'app/shared/model/emprunt.model';

describe('Component Tests', () => {
    describe('Emprunt Management Update Component', () => {
        let comp: EmpruntUpdateComponent;
        let fixture: ComponentFixture<EmpruntUpdateComponent>;
        let service: EmpruntService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [BankTestModule],
                declarations: [EmpruntUpdateComponent]
            })
                .overrideTemplate(EmpruntUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(EmpruntUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(EmpruntService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Emprunt(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.emprunt = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.update).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );

            it(
                'Should call create service on save for new entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Emprunt();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.emprunt = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.create).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );
        });
    });
});
