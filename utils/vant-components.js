import Vue from 'vue';

// 引入 Vant 组件
import {
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Col,
  Divider,
  Field,
  Form,
  Icon,
  Image,
  List,
  Navbar,
  Popup,
  Radio,
  RadioGroup,
  Rate,
  Search,
  Select,
  Switch,
  Tabbar,
  TabbarItem,
  Tag,
  Toast,
  Card,
  Dialog,
  Loading,
  NoticeBar,
  Steps,
  Stepper,
  Swipe,
  SwipeItem,
  Tab,
  TabItem,
  TreeSelect,
  Uploader,
  Grid,
  GridItem,
  ImagePreview,
  Lazyload,
  PullRefresh,
  BackTop,
  CountDown,
  Calendar,
  ContactCard,
  ContactList,
  AddressEdit,
  AddressList,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';

// 注册组件
const Components={
  install(Vue) {
    Vue.component('van-button', Button);
    Vue.component('van-goods-action', GoodsAction);
    Vue.component('van-goods-action-icon', GoodsActionIcon);
    Vue.component('van-goods-action-button', GoodsActionButton);
    Vue.component('van-cell', Cell);
    Vue.component('van-cell-group', CellGroup);
    Vue.component('van-checkbox', Checkbox);
    Vue.component('van-checkbox-group', CheckboxGroup);
    Vue.component('van-col', Col);
    Vue.component('van-field', Field);
    Vue.component('van-icon', Icon);
    Vue.component('van-list', List);
    Vue.component('van-popup', Popup);
    Vue.component('van-radio', Radio);
    Vue.component('van-radio-group', RadioGroup);
    Vue.component('van-rate', Rate);
    Vue.component('van-search', Search);
    Vue.component('van-stepper', Stepper);
    Vue.component('van-switch', Switch);
    Vue.component('van-tabbar', Tabbar);
    Vue.component('van-tabbar-item', TabbarItem);
    Vue.component('van-tag', Tag);
    Vue.component('van-toast', Toast);
    Vue.component('van-card', Card);
    Vue.component('van-dialog', Dialog);
    Vue.component('van-loading', Loading);
    Vue.component('van-notice-bar', NoticeBar);
    Vue.component('van-steps', Steps);
    Vue.component('van-tab', Tab);
    Vue.component('van-tree-select', TreeSelect);
    Vue.component('van-uploader', Uploader);
    Vue.component('van-image-preview', ImagePreview);
    Vue.component('van-lazyload', Lazyload);
    Vue.component('van-pull-refresh', PullRefresh);
    Vue.component('van-contact-card', ContactCard);
    Vue.component('van-contact-list', ContactList);
    Vue.component('van-address-edit', AddressEdit);
    Vue.component('van-address-list', AddressList);
    Vue.component('van-swipe', Swipe);
    Vue.component('van-swipe-item', SwipeItem);
    Vue.component('van-tab-item', TabItem);
    Vue.component('van-grid', Grid);
    Vue.component('van-grid-item', GridItem);
    Vue.component('van-back-top', BackTop);
    Vue.component('van-count-down', CountDown);
    Vue.component('van-calendar', Calendar);
    Vue.component('van-image', Image);
    Vue.component('van-select', Select);
    Vue.component('van-navbar', Navbar);
    Vue.component('van-form', Form);
    Vue.component('van-divider', Divider);
  }
}

Vue.use(Components);
