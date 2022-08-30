export default defineEventHandler((event)=>{
  return `Hello, ${event.context.params.name}`
})

// 匹配路由参数
// http://localhost:3000/api/params/ 后用任何字符都可以代替name