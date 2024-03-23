import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appUnless]'
})

//tạo 1 structual directive chỉ hiện khi condition là false
export class UnlessDirective {

    //đây vẫn là thuộc tính, nhưng nó là hàm setter 
    //hàm này sẽ được thực thi khi giá thị của thuộ tính thay đổi(thay đổi bên ngoài directive)

    @Input('appUnless') set unless(condition : boolean)
    {
        if(!condition)//chỉ render khi điểu kiện là sai
        {
            //tạo view trong viewcontainer 
            //cứ hiểu đơn giản viewcontainer nó đánh dấu vị trí của directive (tại ngtemplate)
            //sao đó từ vị trí đó nó tạo view từ template
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
        else
        {
            //nếu mà điều kiện đúng thì clear (Không hiện thị);
            this.viewContainerRef.clear();
            
        }
    }
    //directive này sẽ nằm trong ng-template, do đó
    //TemplateRef dùng để lấy template mà directive đang được áp dụng
    //ViewContainerRef dùng để xác định nơi nào đê render(tức là để chứa TemplateRef ) (nó dánh dấu vị trí mà chúng ta đặt directive trong DOM)
    constructor(private templateRef : TemplateRef<any>,private viewContainerRef : ViewContainerRef) { }
    
    
}
