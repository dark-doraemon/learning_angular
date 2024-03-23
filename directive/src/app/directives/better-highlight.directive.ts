import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    //chúng ta có thể thêm input để input decorator để có thẻ set giá trị bên ngoài mã không phải hard code
    @Input() defaultColor : string = 'transparent';
    @Input('appBetterHighlight') highlightColor : string = 'blue';


    //renderer2 dùng để set thuộc tính và phương thức cho thẻ html mà nó được áp dụng
    //this is a better approach to set attribute and property
    //angular view và file ts được đồng bộ với nhau 
    //nếu sử dụng nativeElment để thay đổi style lúc này nó sẽ truy cập trực tiếp vào DOM
    //nó sẽ không còn động bộ nữa
    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'yellow');
        this.backgroundColor = this.defaultColor; 
    }

    //sẽ lắng nghe các sự kiện có của thẻ html mà nó được áp dụng(giống AddEventListener trong JS)
    @HostListener('mouseenter') mouseHover(evenData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue');
        this.backgroundColor = this.highlightColor;
    }
    @HostListener('mouseleave') mouseleave(evenData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent');
        this.backgroundColor = this.defaultColor;
    }

    //dùng để dánh dấu 1 thuộc tính phần tử HTML mà mó liên kết
    //ở đây là đánh dấu thuộc tính style của phần tử HTML
    //có nghĩa là chúng ta đang nói với angular tại phần tử mà Directive này áp dụng hãy truy cập tới thuộc tính style
    //vì vậy ta có thể set style của thông qua biến backgroundColor 
    @HostBinding('style.backgroundColor') backgroundColor : string ;
}
