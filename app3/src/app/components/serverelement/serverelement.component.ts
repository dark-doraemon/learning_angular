import { Component, ContentChild, ElementRef, Input, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-serverElement',
    templateUrl: './serverelement.component.html',
    styleUrl: './serverelement.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent {
    @Input('srv') element: { type: string, name: string, content: string };
    @Input() name : string;

    //set static bằng true ta có thể truy cập phần tử DOM trước khi view được render
    //tức là ta có thể get phần tử DOM tại ngOnit() (thay vì tại ngAfterViewInit())
    @ViewChild('heading',{static: true}) header : ElementRef;

    //@ContentChild dùng để lấy content được project 
    //set static == true, ta có thể truy cập vào content tại ngOnInit() (thay vì tại ngAfterContentInit());
    @ContentChild('contentParagraph',{static : true}) content : ElementRef;
    constructor() {
        console.log("contructor called");
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("ngOnChanges called khi '@Input() thay đổi' (mặc định giá trị ban đầu là undefined)");
        console.log(changes);
    }

    ngOnInit(): void {
        console.log('ngOninit called');
        console.log(this.header);
        console.log(this.content);
    }
    ngDoCheck(): void {
        console.log('docheck called, có "bất kì" thay đổi nào là docheck được gọi, changes dược phát hiện bởi detection run,');
    }
    ngAfterContentInit(): void {
        console.log('afterContentInit called 1 lần khi external content được project vào <ng-content></ng-content> của component view');
        console.log(this.content);
    }
    ngAfterContentChecked(): void {
        console.log('afterContentChecked called sau mỗi ngDocheck và khi nội dụng của external content thay đổi');
    }
    ngAfterViewInit(): void {
        console.log('afterViewInit called khi view của component load xong')
        console.log(this.header);
    }
    ngAfterViewChecked(): void {
        console.log('afterViewChecked called được gọi khi mỗi lần view cập nhật hoặc ngAfterContentChecked');
    }

    ngOnDestroy()
    {
        console.log('ngOnDestroy called');
    }

}
