import * as React from 'react';
import { Watch } from '@/decorator';

const user = {
  name: 'zhang',
  address: '',
};

// props接口
export interface HelloWorldProps {
  msg: string;
  user?: typeof user;
}

// state接口
export interface HelloWorldState {
  stateX: string;
}

export default class HelloWorld extends React.Component<HelloWorldProps, HelloWorldState> {
  constructor(props: HelloWorldProps) {
    super(props);
  }

  // 默认参数，必须是static
  static defaultProps: HelloWorldProps = {
    msg: 'default',
    user,
  };

  // 不能是private
  public state: HelloWorldState = {
    stateX: 'x',
  };

  // computed
  private get computedMsg() {
    return 'computed ' + this.props.msg;
  }

  // watch
  @Watch('stateX')
  public watchMethod = (key: string) => {
    console.log(`watch ${key} change`);
  };

  private testMethod = () => {
    console.log('test');
    const x = this.state.stateX;
    this.setState({
      stateX: x === 'x' ? 'y' : 'x',
    });
    console.log(this.state.stateX);
  };

  // lifecycle
  componentDidUpdate() {
    console.log('update1');
  };

  componentDidMount() {
    // 无法修改props的值
    // this.props.msg = '2';
    if (this.props.user) {
      console.log(this.props.user.name);
    }
  }

  render() {
    return (
      <div>
        <div>
          传入msg参数：{this.props.msg}
        </div>
        <div>
          computed: {this.computedMsg}
        </div>
        {
          this.props.user ? <div>默认传入user: {this.props.user.name}</div> : ''
        }
        <div>
          state: {this.state.stateX}
        </div>
        <div onClick={this.testMethod}>
          change stateX
        </div>
      </div>
    );
  }
}