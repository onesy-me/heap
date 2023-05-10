/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import { AmauiHeap, AmauiNode } from '../src';

group('AmauiHeap', () => {

  to('AmauiNode', async () => {
    const value = new AmauiNode('a');

    value.a = 4;

    const valueBrowsers = await evaluate((window: any) => {
      const value = new window.AmauiHeap.AmauiNode('a');

      value.a = 4;

      return value;
    });
    const valueNode = value;
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => {
      assert(value.value).eq('a');
      assert(value.a).eq(4);
    });
  });

  group('AmauiHeap', async () => {

    to('min', async () => {
      const value = AmauiHeap.min.make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.AmauiHeap.AmauiHeap.min.make([4, 1, 7, 3, 5, 4, 7]);

        return value.array;
      });
      const valueNode = value.array;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([1, 3, 4, 4, 5, 7, 7]));
    });

    to('max', async () => {
      const value = AmauiHeap.max.make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.AmauiHeap.AmauiHeap.max.make([4, 1, 7, 3, 5, 4, 7]);

        return value.array;
      });
      const valueNode = value.array;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([7, 5, 7, 3, 1, 4, 4]));
    });

    group('make', () => {

      to('default', async () => {
        const value = AmauiHeap.make([4, 1, 7, 3, 5, 4, 7]);

        const valueBrowsers = await evaluate((window: any) => {
          const value = window.AmauiHeap.AmauiHeap.make([4, 1, 7, 3, 5, 4, 7]);

          return value.array;
        });
        const valueNode = value.array;
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([1, 3, 4, 4, 5, 7, 7]));
      });

      to('min', async () => {
        const value = AmauiHeap.make([4, 1, 7, 3, 5, 4, 7], 'min');

        const valueBrowsers = await evaluate((window: any) => {
          const value = window.AmauiHeap.AmauiHeap.make([4, 1, 7, 3, 5, 4, 7], 'min');

          return value.array;
        });
        const valueNode = value.array;
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([1, 3, 4, 4, 5, 7, 7]));
      });

      to('max', async () => {
        const value = AmauiHeap.make([4, 1, 7, 3, 5, 4, 7], 'max');

        const valueBrowsers = await evaluate((window: any) => {
          const value = window.AmauiHeap.AmauiHeap.max.make([4, 1, 7, 3, 5, 4, 7], 'max');

          return value.array;
        });
        const valueNode = value.array;
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([7, 5, 7, 3, 1, 4, 4]));
      });

    });

    to('left', async () => {
      const value = AmauiHeap.left(1);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.AmauiHeap.AmauiHeap.left(1);

        return value;
      });
      const valueNode = value;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(3));
    });

    to('right', async () => {
      const value = AmauiHeap.right(1);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.AmauiHeap.AmauiHeap.right(1);

        return value;
      });
      const valueNode = value;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(4));
    });

    to('parent', async () => {
      const value = AmauiHeap.parent(4);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.AmauiHeap.AmauiHeap.parent(4);

        return value;
      });
      const valueNode = value;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(1));
    });

    to('isPriority', async () => {
      const value = [AmauiHeap.isPriority(0), AmauiHeap.isPriority(4)];

      const valueBrowsers = await evaluate((window: any) => {
        const value = [window.AmauiHeap.AmauiHeap.isPriority(0), window.AmauiHeap.AmauiHeap.isPriority(4)];

        return value;
      });
      const valueNode = value;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([true, false]));
    });

    to('isLeft', async () => {
      const value = [AmauiHeap.isLeft(0), AmauiHeap.isLeft(1), AmauiHeap.isLeft(4)];

      const valueBrowsers = await evaluate((window: any) => {
        const value = [window.AmauiHeap.AmauiHeap.isLeft(0), window.AmauiHeap.AmauiHeap.isLeft(1), window.AmauiHeap.AmauiHeap.isLeft(4)];

        return value;
      });
      const valueNode = value;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([false, true, false]));
    });

    to('isRight', async () => {
      const value = [AmauiHeap.isRight(0), AmauiHeap.isRight(1), AmauiHeap.isRight(4)];

      const valueBrowsers = await evaluate((window: any) => {
        const value = [window.AmauiHeap.AmauiHeap.isRight(0), window.AmauiHeap.AmauiHeap.isRight(1), window.AmauiHeap.AmauiHeap.isRight(4)];

        return value;
      });
      const valueNode = value;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([false, false, true]));
    });

    to('isLeaf', async () => {
      const value = [AmauiHeap.isLeaf(0, [1, 2, 3, 4, 5]), AmauiHeap.isLeaf(1, [1, 2, 3, 4, 5]), AmauiHeap.isLeaf(4, [1, 2, 3, 4, 5])];

      const valueBrowsers = await evaluate((window: any) => {
        const value = [window.AmauiHeap.AmauiHeap.isLeaf(0, [1, 2, 3, 4, 5]), window.AmauiHeap.AmauiHeap.isLeaf(1, [1, 2, 3, 4, 5]), window.AmauiHeap.AmauiHeap.isLeaf(4, [1, 2, 3, 4, 5])];

        return value;
      });
      const valueNode = value;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([false, false, true]));
    });

  });

  group('amauiHeap', async () => {

    group('variant', async () => {

      to('default', async () => {
        const value = new AmauiHeap().make([4, 1, 7, 3, 5, 4, 7]);

        const valueBrowsers = await evaluate((window: any) => {
          const value = new window.AmauiHeap.AmauiHeap().make([4, 1, 7, 3, 5, 4, 7]);

          return value.array;
        });
        const valueNode = value.array;
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([1, 3, 4, 4, 5, 7, 7]));
      });

      to('min', async () => {
        const value = new AmauiHeap('min').make([4, 1, 7, 3, 5, 4, 7]);

        const valueBrowsers = await evaluate((window: any) => {
          const value = new window.AmauiHeap.AmauiHeap('min').make([4, 1, 7, 3, 5, 4, 7]);

          return value.array;
        });
        const valueNode = value.array;
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([1, 3, 4, 4, 5, 7, 7]));
      });

      to('max', async () => {
        const value = new AmauiHeap('max').make([4, 1, 7, 3, 5, 4, 7]);

        const valueBrowsers = await evaluate((window: any) => {
          const value = new window.AmauiHeap.AmauiHeap('max').make([4, 1, 7, 3, 5, 4, 7]);

          return value.array;
        });
        const valueNode = value.array;
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([7, 5, 7, 3, 1, 4, 4]));
      });

    });

    to('array', async () => {
      const value = AmauiHeap.make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.AmauiHeap.AmauiHeap.make([4, 1, 7, 3, 5, 4, 7]);

        return value.array;
      });
      const valueNode = value.array;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([1, 3, 4, 4, 5, 7, 7]));
    });

    to('first', async () => {
      const value = AmauiHeap.make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.AmauiHeap.AmauiHeap.make([4, 1, 7, 3, 5, 4, 7]);

        return value.first.value;
      });
      const valueNode = value.first.value;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(1));
    });

    to('leafs', async () => {
      const value = AmauiHeap.make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.AmauiHeap.AmauiHeap.make([4, 1, 7, 3, 5, 4, 7]);

        return value.leafs.map(item => item.value);
      });
      const valueNode = value.leafs.map(item => item.value);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([4, 5, 7, 7]));
    });

    to('remove', async () => {
      const value = AmauiHeap.make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.AmauiHeap.AmauiHeap.make([4, 1, 7, 3, 5, 4, 7]);

        return [value.remove.value, value.array];
      });
      const valueNode = [value.remove.value, value.array];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([1, [3, 4, 4, 7, 5, 7]]));
    });

    to('add', async () => {
      const value = AmauiHeap.make([4, 1, 7, 3, 5, 4, 7]).add(4);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.AmauiHeap.AmauiHeap.make([4, 1, 7, 3, 5, 4, 7]).add(4);

        return value.array;
      });
      const valueNode = value.array;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([1, 3, 4, 4, 5, 7, 7, 4]));
    });

    to('swap', async () => {
      const value = AmauiHeap.make([4, 1, 7, 3, 5, 4, 7]).swap(1, 4);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.AmauiHeap.AmauiHeap.make([4, 1, 7, 3, 5, 4, 7]).swap(1, 4);

        return value.array;
      });
      const valueNode = value.array;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([1, 5, 4, 4, 3, 7, 7]));
    });

    to('make', async () => {
      const value = new AmauiHeap().make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.AmauiHeap.AmauiHeap().make([4, 1, 7, 3, 5, 4, 7]);

        return value.array;
      });
      const valueNode = value.array;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([1, 3, 4, 4, 5, 7, 7]));
    });

    to('forEach', async () => {
      const value = AmauiHeap.make([4, 1, 7, 3, 5, 4, 7]);

      const output = [];

      value.forEach((...args: any[]) => output.push(args.map(item => item?.value || item)));

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.AmauiHeap.AmauiHeap.make([4, 1, 7, 3, 5, 4, 7]);

        const output = [];

        value.forEach((...args: any[]) => output.push(args.map(item => item?.value || item)));

        return output;
      });
      const valueNode = output;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([
        [1, 0, undefined, 3, 4, true, false, false, false],
        [3, 1, 1, 4, 5, false, false, true, false],
        [4, 2, 1, 7, 7, false, false, false, true],
        [4, 3, 3, undefined, undefined, false, true, true, false],
        [5, 4, 3, undefined, undefined, false, true, false, true],
        [7, 5, 4, undefined, undefined, false, true, true, false],
        [7, 6, 4, undefined, undefined, false, true, false, true],
      ]));
    });

    to('heapifyUp', async () => {
      const value = new AmauiHeap();

      value.values = [new AmauiNode(4), new AmauiNode(1), new AmauiNode(3)];

      value.heapifyUp(1);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.AmauiHeap.AmauiHeap();

        value.values = [new window.AmauiHeap.AmauiNode(4), new window.AmauiHeap.AmauiNode(1), new window.AmauiHeap.AmauiNode(3)];

        value.heapifyUp(1);

        return value.array;
      });
      const valueNode = value.array;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([1, 4, 3]));
    });

    to('heapifyDown', async () => {
      const value = new AmauiHeap();

      value.values = [new AmauiNode(4), new AmauiNode(1), new AmauiNode(3)];

      value.heapifyDown(0);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.AmauiHeap.AmauiHeap();

        value.values = [new window.AmauiHeap.AmauiNode(4), new window.AmauiHeap.AmauiNode(1), new window.AmauiHeap.AmauiNode(3)];

        value.heapifyDown(0);

        return value.array;
      });
      const valueNode = value.array;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([1, 4, 3]));
    });

  });

});
