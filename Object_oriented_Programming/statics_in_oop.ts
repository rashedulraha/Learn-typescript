{
  //   statics

  class Counter {
    count: number = 0;
    increment() {
      return (this.count = this.count + 1);
    }

    decrement() {
      return (this.count = this.count - 1);
    }
  }

  const instances1 = new Counter();
  console.log(instances1.increment());

  const instances2 = new Counter();
  console.log(instances2.increment());
}
