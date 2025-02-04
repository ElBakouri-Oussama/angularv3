import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/EmployeesComponent';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeupdateComponent } from './employeeupdate/employeeupdate.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDataService } from '../app/DataService/EmployeeDataService';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FixedtopbarComponent } from './fixedtopbar/fixedtopbar.component';
import { VatComponent } from './vat/vat.component'
import { VatDataService } from './DataService/VatDataService';
import { VatEditComponent } from './vat-edit/vat-edit.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './DataService/authentication.service';
import { SignupComponent } from './signup/signup.component';
import { RoutegaurdService } from './routegaurd.service';
import { CommandeComponent } from './commande/commande.component';
import { IDataService } from './DataService/IDataService';
import { CommandeEditComponent } from './commande-edit/commande-edit.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';
import { HeaderComponent } from './header/header.component';
import { ClientComponent } from './client/client.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { PricingComponent } from './pricing/pricing.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard/user-dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { ConfigService } from './config.service';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { BankComponent } from './bank/bank.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ChartComponent } from './chart/chart.component';
import { SignalRService } from './DataService/signal-r.service';
import { MapsComponent } from './maps/maps.component';
import { UploadfilesComponent } from './uploadfiles/uploadfiles.component';
import { StatutComponent } from './statut/statut.component';
import { TripComponent } from './trip/trip.component';
import { StockModule } from './stock/stock.module';
import { DeliveryComponent } from './delivery/delivery.component';
import { DeliveryEditComponent } from './delivery-edit/delivery-edit.component';
import { DeliveryDataService } from './DataService/DeliveryDataService';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientDataService } from './DataService/ClientDataService';
import { ClientCategoryDataService } from './DataService/ClientCategoryDataService';
import { CommandeDataService } from './DataService/CommandeDataService';
import { SalesModule } from './sales/sales.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatStepperModule,
  MatSelectModule,
  MatTabsModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatError,
  MatBadgeModule,
  MatSidenavModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatProgressBarModule,
  MatRadioButton, MatRadioModule, MatProgressSpinnerModule, MatInputModule, MatSnackBarModule
} from '@angular/material';
import { ClientsComponent, DialogOverviewExampleDialog } from './clients/clients.component';
import { EmployeeService } from './DataService/emp.service';
import { ApptestModule } from './apptest/apptest.module';
import {  AgGridModule } from 'ag-grid-angular';
import { InvoiceComponent } from './invoice/invoice.component';
import { ButtonRendererComponent } from './clients/button-render.component';
import { DemoComponent } from './demo/demo.component';
import { DemoService } from './demo/demo.service';
import { PurchaseModule } from './purchase/purchase.module';

//import { Grid } from 'ag-grid-community';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeAddComponent,
    EmployeeupdateComponent,
    LayoutComponent,
    SidebarComponent,
    FixedtopbarComponent,
    VatComponent,
    VatEditComponent,
    ButtonRendererComponent,
    LoginComponent,
    SignupComponent,
    CommandeComponent,
    CommandeEditComponent,
    ContactusComponent,
    FooterComponent,
    SocialComponent,
    HeaderComponent,
    ClientComponent,
    BankComponent,
    TestimonialComponent,
    PricingComponent,
    NotfoundComponent,
    NavigationComponent,
    NavmenuComponent,
    BankComponent,
    HomeComponent,
    ContactComponent,
    ChartComponent,
    MapsComponent,
    UploadfilesComponent,
    StatutComponent,
    TripComponent,
    DeliveryComponent,
    DeliveryEditComponent,
    ClientEditComponent, NavBarComponent, TestComponent, ClientsComponent,
    DialogOverviewExampleDialog,
    InvoiceComponent,
    DemoComponent
    
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([ButtonRendererComponent]),
    AppRoutingModule,
    MatStepperModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatTabsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatProgressBarModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    PurchaseModule
    //Grid

  ],
  providers: [
    EmployeeDataService,
    DeliveryDataService,
    VatDataService,
    AuthenticationService,
    ClientDataService,
    CommandeDataService,
    ClientCategoryDataService,
    IDataService,
    RoutegaurdService,
    EmployeeService,
    ConfigService,
    SignalRService,
    StockModule,
    SalesModule,
    ApptestModule,
    DemoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
