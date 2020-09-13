/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export function withMutations(fn) {
  // asMutable 会通过 ensureOwner 返回一个新的数据结构，并且这个数据结构一定会有一个 ownerID。
  const mutable = this.asMutable();
  fn(mutable);
  // 修改完之后这个 ownerID 需要还原成原来的 ownerID。
  return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
}
