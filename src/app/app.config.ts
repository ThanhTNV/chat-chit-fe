import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { routes } from './app.routes';

const config: SocketIoConfig = {
  url: 'https://api-chat-chit-be.azurewebsites.net',
  options: {
    withCredentials: true,
  },
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(SocketIoModule.forRoot(config)),
  ],
};
