import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileUploadRequestModel } from 'src/app/models/file.model';

@Injectable({
    providedIn: 'root'
})

export class FileService {
    constructor(private http: HttpClient) { }

    Upload(model: FileUploadRequestModel) {
        const api = 'Media/Upload';
        return this.http.post<FileUploadRequestModel>(api, model);
    }
}