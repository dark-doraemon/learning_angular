import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
    selector : '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit 
{
    //elementRef nó sẽ lấy thẻ html mà nó được áp dụng
    constructor(private elementRef : ElementRef) {}
    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'green'
    }
}