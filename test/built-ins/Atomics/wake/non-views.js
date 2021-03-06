// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Test Atomics.wake on view values other than TypedArrays
includes: [testAtomics.js]
---*/

testWithAtomicsNonViewValues(function(view) {
    assert.throws(TypeError, (() => Atomics.wake(view, 0, 0))); // Even with count == 0
});
