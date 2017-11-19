import { Content } from './app/AppContent'
import { Home, Bus, Cart, About, Sandwiches }
  from './app/AppContent'
import CategoriaList from './categorias/List'
import CategoriaForm from './categorias/Form'
import FacultadList from './facultades/List'
import FacultadForm from './facultades/Form'
import Login from './Login'

const routese = [
  {
    path: '/login',
    title: 'Login!',
    icon: 'home',
    component: Login
  }
]
////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path: '/home',
    title: 'Home!',
    icon: 'home',
    exact: true,
    component: Home
  },


  {
    path: '/sandwiches',
    title: 'sandwiches!',
    icon: 'send',
    component: Sandwiches
  },
  {
    path: '/tacos',
    title: 'tacos!',
    icon: 'list',
    component: Content,
    routes: [
      {
        path: '/tacos/bus',
        title: 'bus!',
        icon: 'send',
        component: Bus
      },
      {
        path: '/tacos/cart',
        component: Cart
      },
      {
        path: '/tacos/about/:id',
        title: 'About!',
        icon: 'send',
        component: About
      }
    ]
  },
  {
    path: '/maptracking',
    title: 'maptracking!',
    icon: 'list',
    component: Content,
    routes: [
      {
        path: '/maptracking/categorias/list',
        exact: true,
        title: 'Categorias!',
        icon: 'send',
        component: CategoriaList
      },
      {
        path: '/maptracking/categorias/new',
        exact: true,
        title: 'Categoria New!',
        icon: 'send',
        component: CategoriaForm,
        novisible: true
      },
      {
        path: '/maptracking/categorias/edit/:id',
        exact: true,
        title: 'Categoria Edit!',
        icon: 'send',
        component: CategoriaForm,
        novisible: true
      },
      {
        path: '/maptracking/facultades/list',
        exact: true,
        title: 'Facultad!',
        icon: 'send',
        component: FacultadList,
      },
      {
        path: '/maptracking/facultades/new',
        exact: true,
        title: 'Facultad New!',
        icon: 'send',
        component: FacultadForm,
        novisible: true
      },
      {
        path: '/maptracking/facultades/edit/:id',
        exact: true,
        title: 'Facultad Edit!',
        icon: 'send',
        component: FacultadForm,
        novisible: true
      },
    ]
  }
]

export { routes, routese }