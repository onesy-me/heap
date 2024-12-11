/* tslint:disable: no-shadowed-variable */
import { assert } from '@onesy/test';

import { evaluate } from '../utils/js/test/utils';

import { OnesyHeap, OnesyNode } from '../src';

group('OnesyHeap', () => {

  to('OnesyNode', async () => {
    const value = new OnesyNode('a');

    value.a = 4;

    const valueBrowsers = await evaluate((window: any) => {
      const value = new window.OnesyHeap.OnesyNode('a');

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

  group('OnesyHeap', async () => {

    to('min', async () => {
      const value = OnesyHeap.min.make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.OnesyHeap.OnesyHeap.min.make([4, 1, 7, 3, 5, 4, 7]);

        return value.array;
      });
      const valueNode = value.array;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([1, 3, 4, 4, 5, 7, 7]));
    });

    to('max', async () => {
      const value = OnesyHeap.max.make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.OnesyHeap.OnesyHeap.max.make([4, 1, 7, 3, 5, 4, 7]);

        return value.array;
      });
      const valueNode = value.array;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([7, 5, 7, 3, 1, 4, 4]));
    });

    group('make', () => {

      to('default', async () => {
        const value = OnesyHeap.make([4, 1, 7, 3, 5, 4, 7]);

        const valueBrowsers = await evaluate((window: any) => {
          const value = window.OnesyHeap.OnesyHeap.make([4, 1, 7, 3, 5, 4, 7]);

          return value.array;
        });
        const valueNode = value.array;
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([1, 3, 4, 4, 5, 7, 7]));
      });

      to('min', async () => {
        const value = OnesyHeap.make([4, 1, 7, 3, 5, 4, 7], 'min');

        const valueBrowsers = await evaluate((window: any) => {
          const value = window.OnesyHeap.OnesyHeap.make([4, 1, 7, 3, 5, 4, 7], 'min');

          return value.array;
        });
        const valueNode = value.array;
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([1, 3, 4, 4, 5, 7, 7]));
      });

      to('max', async () => {
        const value = OnesyHeap.make([4, 1, 7, 3, 5, 4, 7], 'max');

        const valueBrowsers = await evaluate((window: any) => {
          const value = window.OnesyHeap.OnesyHeap.max.make([4, 1, 7, 3, 5, 4, 7], 'max');

          return value.array;
        });
        const valueNode = value.array;
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([7, 5, 7, 3, 1, 4, 4]));
      });

    });

    to('left', async () => {
      const value = OnesyHeap.left(1);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.OnesyHeap.OnesyHeap.left(1);

        return value;
      });
      const valueNode = value;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(3));
    });

    to('right', async () => {
      const value = OnesyHeap.right(1);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.OnesyHeap.OnesyHeap.right(1);

        return value;
      });
      const valueNode = value;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(4));
    });

    to('parent', async () => {
      const value = OnesyHeap.parent(4);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.OnesyHeap.OnesyHeap.parent(4);

        return value;
      });
      const valueNode = value;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(1));
    });

    to('isPriority', async () => {
      const value = [OnesyHeap.isPriority(0), OnesyHeap.isPriority(4)];

      const valueBrowsers = await evaluate((window: any) => {
        const value = [window.OnesyHeap.OnesyHeap.isPriority(0), window.OnesyHeap.OnesyHeap.isPriority(4)];

        return value;
      });
      const valueNode = value;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([true, false]));
    });

    to('isLeft', async () => {
      const value = [OnesyHeap.isLeft(0), OnesyHeap.isLeft(1), OnesyHeap.isLeft(4)];

      const valueBrowsers = await evaluate((window: any) => {
        const value = [window.OnesyHeap.OnesyHeap.isLeft(0), window.OnesyHeap.OnesyHeap.isLeft(1), window.OnesyHeap.OnesyHeap.isLeft(4)];

        return value;
      });
      const valueNode = value;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([false, true, false]));
    });

    to('isRight', async () => {
      const value = [OnesyHeap.isRight(0), OnesyHeap.isRight(1), OnesyHeap.isRight(4)];

      const valueBrowsers = await evaluate((window: any) => {
        const value = [window.OnesyHeap.OnesyHeap.isRight(0), window.OnesyHeap.OnesyHeap.isRight(1), window.OnesyHeap.OnesyHeap.isRight(4)];

        return value;
      });
      const valueNode = value;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([false, false, true]));
    });

    to('isLeaf', async () => {
      const value = [OnesyHeap.isLeaf(0, [1, 2, 3, 4, 5]), OnesyHeap.isLeaf(1, [1, 2, 3, 4, 5]), OnesyHeap.isLeaf(4, [1, 2, 3, 4, 5])];

      const valueBrowsers = await evaluate((window: any) => {
        const value = [window.OnesyHeap.OnesyHeap.isLeaf(0, [1, 2, 3, 4, 5]), window.OnesyHeap.OnesyHeap.isLeaf(1, [1, 2, 3, 4, 5]), window.OnesyHeap.OnesyHeap.isLeaf(4, [1, 2, 3, 4, 5])];

        return value;
      });
      const valueNode = value;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([false, false, true]));
    });

  });

  group('onesyHeap', async () => {

    group('variant', async () => {

      to('default', async () => {
        const value = new OnesyHeap().make([4, 1, 7, 3, 5, 4, 7]);

        const valueBrowsers = await evaluate((window: any) => {
          const value = new window.OnesyHeap.OnesyHeap().make([4, 1, 7, 3, 5, 4, 7]);

          return value.array;
        });
        const valueNode = value.array;
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([1, 3, 4, 4, 5, 7, 7]));
      });

      to('min', async () => {
        const value = new OnesyHeap('min').make([4, 1, 7, 3, 5, 4, 7]);

        const valueBrowsers = await evaluate((window: any) => {
          const value = new window.OnesyHeap.OnesyHeap('min').make([4, 1, 7, 3, 5, 4, 7]);

          return value.array;
        });
        const valueNode = value.array;
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([1, 3, 4, 4, 5, 7, 7]));
      });

      to('max', async () => {
        const value = new OnesyHeap('max').make([4, 1, 7, 3, 5, 4, 7]);

        const valueBrowsers = await evaluate((window: any) => {
          const value = new window.OnesyHeap.OnesyHeap('max').make([4, 1, 7, 3, 5, 4, 7]);

          return value.array;
        });
        const valueNode = value.array;
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([7, 5, 7, 3, 1, 4, 4]));
      });

    });

    to('array', async () => {
      const value = OnesyHeap.make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.OnesyHeap.OnesyHeap.make([4, 1, 7, 3, 5, 4, 7]);

        return value.array;
      });
      const valueNode = value.array;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([1, 3, 4, 4, 5, 7, 7]));
    });

    to('first', async () => {
      const value = OnesyHeap.make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.OnesyHeap.OnesyHeap.make([4, 1, 7, 3, 5, 4, 7]);

        return value.first.value;
      });
      const valueNode = value.first.value;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(1));
    });

    to('leafs', async () => {
      const value = OnesyHeap.make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.OnesyHeap.OnesyHeap.make([4, 1, 7, 3, 5, 4, 7]);

        return value.leafs.map(item => item.value);
      });
      const valueNode = value.leafs.map(item => item.value);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([4, 5, 7, 7]));
    });

    to('remove', async () => {
      const value = OnesyHeap.make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.OnesyHeap.OnesyHeap.make([4, 1, 7, 3, 5, 4, 7]);

        return [value.remove.value, value.array];
      });
      const valueNode = [value.remove.value, value.array];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([1, [3, 4, 4, 7, 5, 7]]));
    });

    to('add', async () => {
      const value = OnesyHeap.make([4, 1, 7, 3, 5, 4, 7]).add(4);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.OnesyHeap.OnesyHeap.make([4, 1, 7, 3, 5, 4, 7]).add(4);

        return value.array;
      });
      const valueNode = value.array;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([1, 3, 4, 4, 5, 7, 7, 4]));
    });

    to('make', async () => {
      const value = new OnesyHeap().make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyHeap.OnesyHeap().make([4, 1, 7, 3, 5, 4, 7]);

        return value.array;
      });
      const valueNode = value.array;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([1, 3, 4, 4, 5, 7, 7]));
    });

    to('forEach', async () => {
      const value = OnesyHeap.make([4, 1, 7, 3, 5, 4, 7]);

      const output = [];

      value.forEach((...args: any[]) => output.push(args.map(item => item?.value || item)));

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.OnesyHeap.OnesyHeap.make([4, 1, 7, 3, 5, 4, 7]);

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

  });

});
