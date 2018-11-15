export interface WatchOptions {
  type?: string;
  key: '';
  callback: (...args: any[]) => any;
}

export interface PatchOptions {
  watchType: string;
  watchKey: string;
  callback: (...args: any[]) => any;
  lifeCycle: string | string[];
}

const patch = (target: any, patchOptions: PatchOptions) => {
  const { watchType, watchKey, callback, lifeCycle } = patchOptions;
  if (typeof lifeCycle === 'string') {
    const lifeCycleTmp = target[lifeCycle];
    target[lifeCycle] = function(
      prevProps: any,
      prevState: any,
      snapshot: any,
    ) {
      if (this.state[watchKey] !== prevState[watchKey]) {
        callback(watchKey);
      }
      lifeCycleTmp.call(this);
    };
  }
};

export const Watch = (opts: string | WatchOptions) => {
  return (target: any, key: any, pro?: any) => {
    const componentDidMount = target.componentDidMount;
    target.componentDidMount = function() {
      const patchOptions: PatchOptions = {
        watchType: 'state',
        lifeCycle: 'componentDidUpdate',
      } as PatchOptions;
      if (typeof opts === 'string') {
        patchOptions.watchKey = opts;
        patchOptions.callback = this[key];
      } else {
      }

      patch(target, patchOptions);
      componentDidMount.call(this);
    };
  };
};
