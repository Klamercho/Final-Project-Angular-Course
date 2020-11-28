import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CultureComponent } from './culture/culture.component';
import { ClientsComponent } from './clients/clients.component';
import { NewsComponent } from './news/news.component';
import { BlogComponent } from './blog/blog.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'services',
    pathMatch: 'full',
    component: ServicesComponent,
  },
  {
    path: 'blog',
    pathMatch: 'full',
    component: BlogComponent,
  },
  {
    path: 'news',
    pathMatch: 'full',
    component: NewsComponent,
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent,

  },
  {
    path: 'clients',
    pathMatch: 'full',
    component: ClientsComponent,
  },
  {
    path: 'careers',
    pathMatch: 'full',
    component: CareersComponent,
  },
  {
    path: 'contacts',
    pathMatch: 'full',
    component: ContactsComponent,
  },
  {
    path: 'culture',
    pathMatch: 'full',
    component: CultureComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'HOME'
    }
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      title: '404'
    }
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
