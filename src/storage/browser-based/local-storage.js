import _ from 'lodash'

// or subfix
let _local_storage_key = 'jh-ll-pad-db'
let _local_storage_key_list = 'jh-ll-pad-list'
let _subfix = 'jh-ll-pad-'

let _db = false
export function init (val) {
  if (_db) return _db

  _db = val || {}
  try {
    localStorage.setItem(_local_storage_key, _db)
  } catch (err) { console.log(err) }
}
function write (key, value) {
  if (!_db) init()

}
function read (key) {
  if (!_db) init()

}
export function get (key) {
  if (!_db) init()

}

export function set (key, val) {
  if (!_db) init()

}

export function update (key, val) {

}
