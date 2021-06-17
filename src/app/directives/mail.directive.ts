import { Directive, ElementRef, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appMail]'
})
export class MailDirective {

    constructor(private el: ElementRef, private authService: AuthService) {
        el.nativeElement.style.backgroundColor = '';
        this.authService.loggedUser.subscribe(val => {
            el.nativeElement.innerText = val;
        })
    }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  

}
