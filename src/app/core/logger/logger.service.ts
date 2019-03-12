import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoreModule } from '../core.module';

type LogType = 'Error' | 'Info' | 'Success' | 'Warn';

@Injectable({
  providedIn: CoreModule
})
export class LoggerService {
  constructor(private snackBar: MatSnackBar) {}

  log(msg: string, data: any, source: string, showSnackBar: boolean): void {
    this.writeLog(msg, data, source, showSnackBar, 'Info');
  }

  logError(
    msg: string,
    data: any,
    source: string,
    showSnackBar: boolean
  ): void {
    this.writeLog(msg, data, source, showSnackBar, 'Error');
  }

  logSuccess(
    msg: string,
    data: any,
    source: string,
    showSnackBar: boolean
  ): void {
    this.writeLog(msg, data, source, showSnackBar, 'Success');
  }

  logWarning(
    msg: string,
    data: any,
    source: string,
    showSnackBar: boolean
  ): void {
    this.writeLog(msg, data, source, showSnackBar, 'Warn');
  }

  private writeLog(
    msg: string,
    data: any,
    source: string,
    showSnackBar: boolean,
    logType: LogType
  ): void {
    const isError = logType === 'Error';
    const duration: number = isError ? 10000 : 4000;
    const action = isError ? 'Close' : undefined;
    source = source ? `[${source}]` : '';

    if (window.console && window.console.log) {
      if (isError) {
        console.error(source, msg, data);
      } else {
        console.log(source, msg, data);
      }
    }
    if (showSnackBar) {
      this.snackBar.open(msg, action, {
        duration,
        panelClass: [`snackbar${logType}`]
      });
    }
  }
}
