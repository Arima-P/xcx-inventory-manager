import React, { Component } from 'react';
import { cloud } from '@tarojs/taro';
import { Provider } from 'react-redux';
import globalStore from './store';
import './app.scss';

const store = globalStore();

class App extends Component {
  componentDidMount() {
    cloud.init({ env: 'dev-hrxqi', traceUser: true });
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
