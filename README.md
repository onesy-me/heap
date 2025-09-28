
</br>
</br>

<p align='center'>
  <a target='_blank' rel='noopener noreferrer' href='#'>
    <img width='auto' height='84' src='https://raw.githubusercontent.com/onesy-me/onesy/refs/heads/main/utils/images/logo.png' alt='onesy logo' />
  </a>
</p>

<h1 align='center'>onesy Min/Max Heap</h1>

<h3 align='center'>
  <sub>MIT license&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Production ready&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>UMD 2kb gzipped&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>100% test cov&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Browser and Nodejs</sub>
</h3>

<p align='center'>
  <sub>Very simple code&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Modern code&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Junior friendly&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Typescript&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Made with :yellow_heart:</sub>
</p>

<br />

## Getting started

### Add

```sh
yarn add @onesy/heap
```

### Use cases
- Priority queues
- Schedulers
- etc.

### Use

```javascript
  import { OnesyHeap } from '@onesy/heap';

  // Make a new heap instance
  // with an optional initial value a variant (min or max)
  // a min heap as a default value
  const onesyMinHeap = new OnesyHeap();

  // Add a onesy node / value
  onesyMinHeap.add(4);

  // You can also make a heap from array of values
  onesyMinHeap.make([4, 44, 54, 14, 31, 37, 24]);

  // values
         4
        /  \
       /    \
     14      24
     / \     / \
   44   31 37   54

  // Remove priority min (first) value
  onesyMinHeap.remove();

  // 4

  // values
         14
        /  \
       /    \
     31      24
     / \     /
   44   54 37
```

### Dev

Install

```sh
yarn
```

Test

```sh
yarn test
```

### Prod

Build

```sh
yarn build
```
