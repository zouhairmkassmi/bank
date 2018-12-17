import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IEmprunt } from 'app/shared/model/emprunt.model';

type EntityResponseType = HttpResponse<IEmprunt>;
type EntityArrayResponseType = HttpResponse<IEmprunt[]>;

@Injectable({ providedIn: 'root' })
export class EmpruntService {
    private resourceUrl = SERVER_API_URL + 'api/emprunts';

    constructor(private http: HttpClient) {}

    create(emprunt: IEmprunt): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(emprunt);
        return this.http
            .post<IEmprunt>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertDateFromServer(res));
    }

    update(emprunt: IEmprunt): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(emprunt);
        return this.http
            .put<IEmprunt>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertDateFromServer(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<IEmprunt>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertDateFromServer(res));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IEmprunt[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    private convertDateFromClient(emprunt: IEmprunt): IEmprunt {
        const copy: IEmprunt = Object.assign({}, emprunt, {
            date: emprunt.date != null && emprunt.date.isValid() ? emprunt.date.toJSON() : null
        });
        return copy;
    }

    private convertDateFromServer(res: EntityResponseType): EntityResponseType {
        res.body.date = res.body.date != null ? moment(res.body.date) : null;
        return res;
    }

    private convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        res.body.forEach((emprunt: IEmprunt) => {
            emprunt.date = emprunt.date != null ? moment(emprunt.date) : null;
        });
        return res;
    }
}
