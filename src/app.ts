import { createApp } from 'nativescript-vue';
import DrawerPlugin from '@nativescript-community/ui-drawer/vue3';
import Home from './components/Home.vue';
import BottomNavigationBar from '@nativescript-community/ui-material-bottomnavigationbar/vue';
import BottomNavigation from '@nativescript-community/ui-material-bottom-navigation/vue';

createApp(Home)
.use(DrawerPlugin)
.use(BottomNavigationBar)
.use(BottomNavigation)
.start();
