import MOCK from  'mockjs'
import data from '../data.json'

MOCK.mock('/good/seller',{
  code: 0,
  codeMsg:'成功',
  data:data.seller
})

MOCK.mock('/good/goods',{
  code: 0,
  codeMsg:'成功',
  data:data.goods
})

MOCK.mock('/good/ratings',{
  code: 0,
  codeMsg:'成功',
  data:data.ratings
})
