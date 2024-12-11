import is from '@onesy/utils/is';

export interface IOnesyNode {
  value?: any;

  [p: string]: any;
}

export class OnesyNode implements IOnesyNode {
  [p: string]: any;

  public constructor(
    public value?: any
  ) { }

}

export type TVariant = 'min' | 'max';

export type TMethodForEach = (value: OnesyNode, index: number, parent: OnesyNode, left: OnesyNode, right: OnesyNode, isPriority: boolean, isLeaf: boolean, isLeft: boolean, isRight: boolean) => any;

export class OnesyHeap {
  public values: Array<OnesyNode> = [];

  public static get min(): OnesyHeap { return new OnesyHeap('min'); }

  public static get max(): OnesyHeap { return new OnesyHeap('max'); }

  public static make(value: any[], variant?: TVariant): OnesyHeap { return new OnesyHeap(variant).make(value); }

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

  public get first(): OnesyNode { return this.values[0]; }

  public get leafs(): Array<OnesyNode> {
    return this.values.filter((_, index) => OnesyHeap.isLeaf(index, this.values));
  }

  public get remove(): OnesyNode {
    if (!this.values.length) return;

    const first = this.first;
    const end = this.values.pop();

    this.values[0] = end;

    // Heapify down first values value
    this.heapifyDown();

    return first;
  }

  public add(value: OnesyNode | any): OnesyHeap {
    const onesyNode = value instanceof OnesyNode ? value : new OnesyNode(value);

    // Push to the end of the values array
    this.values.push(onesyNode);

    // Heapify up the added values value
    this.heapifyUp();

    return this;
  }

  public make(value: Array<any>): OnesyHeap {
    this.values = value.map(value_ => value_ instanceof OnesyNode ? value_ : new OnesyNode(value_));

    for (let i = Math.floor(this.values.length / 2); i >= 0; i--) {
      this.heapifyDown(i);
    }

    return this;
  }

  public forEach(method: TMethodForEach): void {
    if (is('function', method)) this.values.forEach((value, index) => {
      const parent = this.values[OnesyHeap.parent(index)];
      const left = this.values[OnesyHeap.left(index)];
      const right = this.values[OnesyHeap.right(index)];
      const isPriority = OnesyHeap.isPriority(index);
      const isLeaf = OnesyHeap.isLeaf(index, this.values);
      const isLeft = OnesyHeap.isLeft(index);
      const isRight = OnesyHeap.isRight(index);

      method(value, index, parent, left, right, isPriority, isLeaf, isLeft, isRight);
    });
  }

  private swap(index: number, index1: number): OnesyHeap {
    [this.values[index], this.values[index1]] = [this.values[index1], this.values[index]];

    return this;
  }

  private heapifyUp(index_ = this.values.length - 1): void {
    if (this.values.length > 0) {
      let index = index_;
      let parentIndex = OnesyHeap.parent(index);

      while (
        index > 0 &&
        (this.variant === 'min' ?
          this.values[parentIndex]?.value > this.values[index]?.value :
          this.values[parentIndex]?.value < this.values[index]?.value)
      ) {
        // Swap parent and child
        this.swap(parentIndex, index);

        index = parentIndex;
        parentIndex = OnesyHeap.parent(index);
      }
    }
  }

  private heapifyDown(index_ = 0): void {
    if (!OnesyHeap.isLeaf(index_, this.values)) {
      const index = index_;

      const left = OnesyHeap.left(index);
      const right = OnesyHeap.right(index);
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
