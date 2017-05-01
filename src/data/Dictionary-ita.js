let map = {
  'mio': '我的。mio: m.s; mia: f.s;',
}
let dictionaryItalian = {
  'una': '一个',
  'sono': '是',
  'colori': '颜色',

  'mia': blurLookup('mio'),
  'mio': map['mio'],

  'la': '定冠词',
  'collega': '同学',
  'amica': '朋友',
}

function blurLookup (word) {
  if (word in map) {
    return map[word];
  }
  let like = word.replace(/a$/, 'o')
  if (like in map) {
    return map[like];
  }
}
export default dictionaryItalian
