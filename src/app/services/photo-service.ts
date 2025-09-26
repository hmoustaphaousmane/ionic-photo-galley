import { Injectable } from '@angular/core';
import {
  Camera,
  CameraResultType,
  CameraSource,
} from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  // Array of photos
  public photos: UserPhoto[] = [];

  public async addNewToGalley() {
    // Take a photo
    const capturePhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    // Add the newly captured photo to the beginning of the photos array
    this.photos.unshift({
      filepath: 'soon...',
      webviewPath: capturePhoto.webPath!,
    });
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
