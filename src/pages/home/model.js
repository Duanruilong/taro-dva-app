import * as homeApi from './service';

export default {
  namespace: 'home',
  state: {
    banner: [],

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
          },
        });
      }
    },
    * effectsDemo(_, { call, put }) {
      const { status, data } = yield call(homeApi.demo, {});
      if (status === 'ok') {
        yield put({ type: 'save',
          payload: {
            topData: data,
          } });
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
