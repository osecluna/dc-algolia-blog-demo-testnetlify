import Vue from 'vue';
import { Card, Row, Col, Container, Header, Main, Pagination } from 'element-ui';

export default (): void => {
  Vue.use(Card);
  Vue.use(Row);
  Vue.use(Col);
  Vue.use(Container);
  Vue.use(Header);
  Vue.use(Main);
  Vue.use(Pagination);
};
