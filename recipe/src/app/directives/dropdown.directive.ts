import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    //nếu true thì "open" thêm vào trong class của thể đang áp dụng directive
    @HostBinding('class.open') isOpen = false;

    constructor(private elementRef : ElementRef,private renderer : Renderer2) {}

    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;

        if(this.isOpen === true) 
        {
            this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor' , 'blue');
        }
        else 
        {
            this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor' , 'transparent');
        }
    }
}
