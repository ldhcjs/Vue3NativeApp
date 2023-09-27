import { createApp } from 'nativescript-vue';
import DrawerPlugin from '@nativescript-community/ui-drawer/vue3';
import Home from './components/Home.vue';

createApp(Home)
.use(DrawerPlugin).start();
