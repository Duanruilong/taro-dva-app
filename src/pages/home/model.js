import * as homeApi from './service';

export default {
  namespace: 'home',
  state: {
    banner: [],
    brands:[],
    banneret:'',
    productsList:[],
    page: 1,
  },

  effects: {
    *load(_, { call, put }) {
      const { status, data } = yield call(homeApi.homepage, {});
      console.log('获取首页数据==》',data);
      
      if (status === 'ok') {
        yield put({
          type: 'save',
          payload: {
            banner: data.banner,
            brands: data.brands,
            banneret:data
          },
        });
      }
    },
    *product({ payload }, { call, put, select }) {
      const {page, productsList} = yield select(state => state.home)
      const { status, data } = yield call(homeApi.product, {...payload});
      console.log(page,'-===--获取product数据==》',data);
      
      if (status === 'ok') {
        yield put({
          type: 'save',
          payload: {
            productsList:page > 1 ? [...productsList,...data.rows] : data.rows
          },
        });
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
