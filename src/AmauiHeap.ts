import is from '@amaui/utils/is';

export interface IAmauiNode {
  value?: any;

  [p: string]: any;
}

export class AmauiNode implements IAmauiNode {
  [p: string]: any;

  public constructor(
    public value?: any
  ) { }

}

export type TVariant = 'min' | 'max';

export type TMethodForEach = (value: AmauiNode, index: number, parent: AmauiNode, left: AmauiNode, right: AmauiNode, isPriority: boolean, isLeaf: boolean, isLeft: boolean, isRight: boolean) => any;

export class AmauiHeap {
  public values: Array<AmauiNode> = [];

  public static get min(): AmauiHeap { return new AmauiHeap('min'); }

  public static get max(): AmauiHeap { return new AmauiHeap('max'); }

  public static make(value: any[], variant?: TVariant): AmauiHeap { return new AmauiHeap(variant).make(value); }

  public static left(index: number): number { return (2 * index) + 1; }

  public static right(index: number): number { return (2 * index) + 2; }

  public static parent(index: number): number { return Math.floor((index - 1) / 2); }

  public static isPriority(index: number): boolean { return index === 0; }

  public static isLeft(index: number): boolean { return !!(index !== 0 && index % 2); }

  public static isRight(index: number): boolean { return !!(index !== 0 && !(index % 2)); }

  public static isLeaf(index: number, values: Array<any>): boolean {
    return index >= Math.floor(values.length / 2) && index <= values.length - 1;
  }

  public constructor(
    public variant: TVariant = 'min'
  ) { }

  public get array(): any[] { return this.values.map(item => item.value); }

  public get first(): AmauiNode { return this.values[0]; }

  public get leafs(): Array<AmauiNode> {
    return this.values.filter((_, index) => AmauiHeap.isLeaf(index, this.values));
  }

  public get remove(): AmauiNode {
    if (!this.values.length) return;

    const first = this.first;
    const end = this.values.pop();

    this.values[0] = end;

    // Heapify down first values value
    this.heapifyDown();

    return first;
  }

  public add(value: AmauiNode | any): AmauiHeap {
    const amauiNode = value instanceof AmauiNode ? value : new AmauiNode(value);

    // Push to the end of the values array
    this.values.push(amauiNode);

    // Heapify up the added values value
    this.heapifyUp();

    return this;
  }

  public swap(index: number, index1: number): AmauiHeap {
    [this.values[index], this.values[index1]] = [this.values[index1], this.values[index]];

    return this;
  }

  public make(value: Array<any>): AmauiHeap {
    this.values = value.map(value_ => value_ instanceof AmauiNode ? value_ : new AmauiNode(value_));

    for (let i = Math.floor(this.values.length / 2); i >= 0; i--) {
      this.heapifyDown(i);
    }

    return this;
  }

  public forEach(method: TMethodForEach): void {
    if (is('function', method)) this.values.forEach((value, index) => {
      const parent = this.values[AmauiHeap.parent(index)];
      const left = this.values[AmauiHeap.left(index)];
      const right = this.values[AmauiHeap.right(index)];
      const isPriority = AmauiHeap.isPriority(index);
      const isLeaf = AmauiHeap.isLeaf(index, this.values);
      const isLeft = AmauiHeap.isLeft(index);
      const isRight = AmauiHeap.isRight(index);

      method(value, index, parent, left, right, isPriority, isLeaf, isLeft, isRight);
    });
  }

  public heapifyUp(index_ = this.values.length - 1): void {
    if (this.values.length > 0) {
      let index = index_;
      let parentIndex = AmauiHeap.parent(index);

      while (
        index > 0 &&
        (this.variant === 'min' ?
          this.values[parentIndex]?.value > this.values[index]?.value :
          this.values[parentIndex]?.value < this.values[index]?.value)
      ) {
        // Swap parent and child
        this.swap(parentIndex, index);

        index = parentIndex;
        parentIndex = AmauiHeap.parent(index);
      }
    }
  }

  public heapifyDown(index_ = 0): void {
    if (!AmauiHeap.isLeaf(index_, this.values)) {
      const index = index_;

      const left = AmauiHeap.left(index);
      const right = AmauiHeap.right(index);
      let swapIndex = index;

      // Swap left and parent if swap to be made
      if (
        this.variant === 'min' ?
          this.values[left]?.value < this.values[swapIndex]?.value :
          this.values[left]?.value > this.values[swapIndex]?.value
      ) swapIndex = left;

      // Swap right and parent if swap to be made
      if (
        this.variant === 'min' ?
          this.values[right]?.value < this.values[swapIndex]?.value :
          this.values[right]?.value > this.values[swapIndex]?.value
      ) swapIndex = right;

      if (index !== swapIndex) {
        this.swap(index, swapIndex);

        this.heapifyDown(swapIndex);
      }
    }
  }

}
