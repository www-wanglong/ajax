class Watcher {

  constructor (vm, key, cb) {
    this.vm = vm;
    this.key = key;
    this.cb = cb;

    Dep.target = this;
    this.oldValue = vm[key];
    Dep.target = null;
  };

  // 数据变化的时候 更新视图
  update () {
    let newValue = this.vm[this.key]
    if (this.oldValue === newValue) {
      return;
    };
    this.cb(newValue);
  };

};