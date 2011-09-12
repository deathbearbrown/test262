// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator "in" uses GetValue
 *
 * @section 11.8.7
 * @path 11_Expressions/11.8_Relational_Operators/11.8.7_The_in_operator/S11.8.7_A2.1_T2.js
 * @description If GetBase(RelationalExpression) is null, throw ReferenceError
 */

//CHECK#1
try {
  MAX_VALUE in Number;
  $ERROR('#1.1: MAX_VALUE in Number throw ReferenceError. Actual: ' + (MAX_VALUE in Number));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: MAX_VALUE in Number throw ReferenceError. Actual: ' + (e));  
  }
}
