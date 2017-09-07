//our root app component
import {Component,
  ComponentFactory,
  ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef,
   ViewChild,
  } from '@angular/core'
import {AppComponent} from "./app.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.container.html'
})
export class AppContainerComponent {
  @ViewChild("tablesContainer", { read: ViewContainerRef }) container;
  componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) {}

  createComponent(type) {
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(AppComponent);

    this.componentRef = this.container.createComponent(factory);

    this.componentRef.instance.type = type;
  }
}

