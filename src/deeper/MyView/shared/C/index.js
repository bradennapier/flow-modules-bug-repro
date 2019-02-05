/* @flow */

function test(): number {
  // if using module_dirname here this 
  // error would be masked
  return 'hi'
}

export default test;