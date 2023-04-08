// import CSS resources
import "primevue/resources/primevue.min.css"; // core
import "primevue/resources/themes/saga-blue/theme.css"; // theme
import "primeicons/primeicons.css"; // icons
import "/node_modules/primeflex/primeflex.css";

import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Toast from "primevue/toast";
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";
import Avatar from "primevue/avatar";
import Badge from "primevue/badge";
import Menu from "primevue/menu";
import ToastService from "primevue/toastservice";
import Card from "primevue/card";
import ProgressBar from "primevue/progressbar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import Row from "primevue/row";
import Rating from 'primevue/rating';
import Tag from 'primevue/tag';
import Chart from 'primevue/chart';


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.use(ToastService);
  nuxtApp.vueApp.component("Menubar", Menubar);
  nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("Avatar", Avatar);
  nuxtApp.vueApp.component("Badge", Badge);
  nuxtApp.vueApp.component("Toast", Toast);
  nuxtApp.vueApp.component("Menu", Menu);
  nuxtApp.vueApp.component("Card", Card);
  nuxtApp.vueApp.component("ProgressBar", ProgressBar);
  nuxtApp.vueApp.component("DataTable", DataTable);
  nuxtApp.vueApp.component("Column", Column);
  nuxtApp.vueApp.component("ColumnGroup", ColumnGroup);
  nuxtApp.vueApp.component("Row", Row);
  nuxtApp.vueApp.component("Rating", Rating);
  nuxtApp.vueApp.component("Tag", Tag);
  nuxtApp.vueApp.component("Chart", Chart);
  //other components that you need
});
