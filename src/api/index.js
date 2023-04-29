// 不能用import admin from './admin'来引入，因为admin.js没用export default
import * as admin from './admin'
export default{
    admin
}