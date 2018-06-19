// Imports all libraries,services,models,classes
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
// import { Observable } from 'rxjs';
// import { Subject } from 'rxjs/Subject';
import { Observable, Subject, throwError} from 'rxjs';

@Injectable()
export class AlertService {
    private subject = new Subject<any>();
    private keepAfterNavigationChange = false;

constructor(private router: Router) {
        // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                } else {
                    // clear alert
                    this.subject.next();
                }
            }
        });
    }
    // OnSuccess Show message
    success(message: string, keepAfterNavigationChange = false) {
        debugger
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    }

    showPopup(message: string){
        this.subject.next({type: 'modal', text: message });
    }

   // Onerror show message
    error(message: string, keepAfterNavigationChange = false) {
        
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    }
    // getMessage is method to take message from component
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }



}
