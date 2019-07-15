import Vue from 'vue';

import blogDateFilter from '@/filters/blog-date.filter';

Vue.filter('blogDate', blogDateFilter);
