import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { BasicPage as ActionSheetBasicPage } from '../pages/action-sheets/pages';
import { BasicPage as AlertBasicPage } from '../pages/alerts/pages';
import { BasicPage as BadgeBasicPage } from '../pages/badges/pages';
import { BasicPage as ButtonBasicPage } from '../pages/buttons/pages';
import { BasicPage as FabBasicPage } from '../pages/fabs/pages';
import { BasicPage as CardBasicPage } from '../pages/cards/pages';
import { BasicPage as CheckboxBasicPage } from '../pages/checkboxes/pages';
import { BasicPage as DatetimeBasicPage } from '../pages/datetime/pages';
import { BasicPage as GestureBasicPage } from '../pages/gestures/pages';
import { BasicPage as GridBasicPage } from '../pages/grid/pages';
import { BasicPage as IconBasicPage } from '../pages/icons/pages';
import { BasicPage as InputBasicPage } from '../pages/inputs/pages';
import { BasicPage as ListBasicPage } from '../pages/lists/pages';
import { BasicPage as LoadingBasicPage } from '../pages/loading/pages';
import { BasicPage as MenuBasicPage } from '../pages/menus/pages';
import { PageOne as MenuPageOne } from '../pages/menus/pages';
import { PageTwo as MenuPageTwo } from '../pages/menus/pages';
import { PageThree as MenuPageThree } from '../pages/menus/pages';
import { BasicPage as ModalBasicPage, ModalContentPage } from '../pages/modals/pages';
import { BasicPage as NavigationBasicPage, NavigationDetailsPage } from '../pages/navigation/pages';
import { BasicPage as PopoverBasicPage, PopoverPage as PopoverContentPage } from '../pages/popovers/pages';
import { BasicPage as RadioBasicPage } from '../pages/radios/pages';
import { BasicPage as RangeBasicPage } from '../pages/ranges/pages';
import { BasicPage as SearchbarBasicPage } from '../pages/searchbars/pages';
import { BasicPage as SegmentBasicPage } from '../pages/segments/pages';
import { BasicPage as SelectBasicPage } from '../pages/selects/pages';
import { BasicPage as SlideBasicPage } from '../pages/slides/pages';
import { BasicPage as TabBasicPage, TabBasicContentPage } from '../pages/tabs/pages';
import { BasicPage as ToastBasicPage } from '../pages/toast/pages';
import { BasicPage as ToggleBasicPage } from '../pages/toggles/pages';
import { BasicPage as ToolbarBasicPage } from '../pages/toolbar/pages';
import { Page2 as ToolbarColorsPage2 } from '../pages/toolbar/pages';
import { Page3 as ToolbarColorsPage3 } from '../pages/toolbar/pages';
import { Page4 as ToolbarColorsPage4 } from '../pages/toolbar/pages';

// // pipes
// import { DisplayRoutePipe } from '../pipes/display-route';

@NgModule({
  declarations: [
    MyApp,
    ActionSheetBasicPage,
    AlertBasicPage,
    BadgeBasicPage,
    ButtonBasicPage,
    FabBasicPage,
    CardBasicPage,
    CheckboxBasicPage,
    DatetimeBasicPage,
    GestureBasicPage,
    GridBasicPage,
    IconBasicPage,
    InputBasicPage,
    ListBasicPage,
    LoadingBasicPage,
    MenuBasicPage,
    MenuPageOne,
    MenuPageTwo,
    MenuPageThree,
    ModalBasicPage,
    ModalContentPage,
    NavigationBasicPage,
    NavigationDetailsPage,
    PopoverBasicPage,
    PopoverContentPage,
    RadioBasicPage,
    RangeBasicPage,
    SearchbarBasicPage,
    SegmentBasicPage,
    SelectBasicPage,
    SlideBasicPage,
    TabBasicPage,
    TabBasicContentPage,
    ToastBasicPage,
    ToggleBasicPage,
    ToolbarBasicPage,
    ToolbarColorsPage2,
    ToolbarColorsPage3,
    ToolbarColorsPage4,
    // DisplayRoutePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      statusbarPadding: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActionSheetBasicPage,
    AlertBasicPage,
    BadgeBasicPage,
    ButtonBasicPage,
    FabBasicPage,
    CardBasicPage,
    CheckboxBasicPage,
    DatetimeBasicPage,
    GestureBasicPage,
    GridBasicPage,
    IconBasicPage,
    InputBasicPage,
    ListBasicPage,
    LoadingBasicPage,
    MenuBasicPage,
    MenuPageOne,
    MenuPageTwo,
    MenuPageThree,
    ModalBasicPage,
    ModalContentPage,
    NavigationBasicPage,
    NavigationDetailsPage,
    PopoverBasicPage,
    PopoverContentPage,
    RadioBasicPage,
    RangeBasicPage,
    SearchbarBasicPage,
    SegmentBasicPage,
    SelectBasicPage,
    SlideBasicPage,
    TabBasicPage,
    TabBasicContentPage,
    ToastBasicPage,
    ToggleBasicPage,
    ToolbarBasicPage,
    ToolbarColorsPage2,
    ToolbarColorsPage3,
    ToolbarColorsPage4,

  ],
  providers: []
})
export class AppModule { }
