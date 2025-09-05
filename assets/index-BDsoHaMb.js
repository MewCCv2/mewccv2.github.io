import{r,c as m,o as g,a as l,e as i,w as t,d as e,t as p,u as d,F as y}from"./index-DPj_L1nC.js";const $={navy:"",dark:"",bg:"","pa-lg":"",flex:""},T={__name:"notice",setup(v){let u=`// 预设
this.$notify.message('This is a message')
this.$notify.success('This is a success')
this.$notify.caution('This is a caution')
this.$notify.failure('This is a failure')

// 自定义消息框
this.$notify({
    color: '', // 字符串，可以使用样式属性中的预定义颜色，默认是 blue
    title: '', // 字符串、布尔，默认是空
    delay: 5,  // 整数，消息存在时间，默认是 5
    stick: false, // 布尔，消息框是否一直存在
    close: true,  // 布尔，是否显示关闭图标
    class: 'foo bar', //字符串，自定义类名
    style: '' // 字符串，用于特殊情况下的样式
    text: '', // 字符串，提示框的主要内容，默认是 This is a message
    icon: '', // 字符串、布尔，使用预定义图标或用 false 关闭图标显示
})`;return(a,s)=>{const n=r("Button"),f=r("Prism");return g(),m(y,null,[s[8]||(s[8]=l("h1",{xl:"","fs-10":"","mb-lg":"",roboto:""},"面包棒消息提示框",-1)),l("div",$,[i(n,{green:"",light:"",bg:"",vanilla:"","mx-md":"",onClick:s[0]||(s[0]=o=>a.$app.notify.success("This is a success"))},{default:t(()=>[...s[4]||(s[4]=[e("Success",-1)])]),_:1}),i(n,{blue:"",light:"",bg:"",vanilla:"","mx-md":"",onClick:s[1]||(s[1]=o=>a.$app.notify.message("This is a message"))},{default:t(()=>[...s[5]||(s[5]=[e("Message",-1)])]),_:1}),i(n,{king:"",light:"",bg:"",vanilla:"","mx-md":"",onClick:s[2]||(s[2]=o=>a.$app.notify.caution("This is a caution"))},{default:t(()=>[...s[6]||(s[6]=[e("Caution",-1)])]),_:1}),i(n,{red:"",light:"",bg:"",vanilla:"","mx-md":"",onClick:s[3]||(s[3]=o=>a.$app.notify.failure("This is a failure"))},{default:t(()=>[...s[7]||(s[7]=[e("Failure",-1)])]),_:1})]),s[9]||(s[9]=l("div",null," $app.notify.clear() 清空消息列表 ",-1)),i(f,{lang:"javascript"},{default:t(()=>[e(p(d(u)),1)]),_:1})],64)}}};export{T as default};
