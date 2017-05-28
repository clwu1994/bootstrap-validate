# bootstrap-validate
* 一个基于bootstrap的数据校验插件
1. 用法
tags:
- html调用 
* 脚步默认调用$('.bootstrap-validate').bootstrapValidate(); 所以只需在想要校验的form表单上添加class="bootstrap-validate"
``` html
<form class="bootstrap-validate">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group">
    <label for="exampleInputFile">File input</label>
    <input type="file" id="exampleInputFile">
    <p class="help-block">Example block-level help text here.</p>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox"> Check me out
    </label>
  </div>
  <button type="submit" class="btn btn-default">Submit</button>
</form>
```
- javascript调用 
``` javascript
$(选择器).bootstrapValidate();
```
2. 默认参数
* handle：keyup 默认启用keyup事件
* extendRules: function(rules){$.extend(__RULES__,rules);}  支持扩展规则的方法

3. 默认规则 ==> 对应表单写法
* require 必填项 ==> require="true"
* Integer 必须为数字 ==> Integer="true"
* regex 正则表达式 ==> regex=/^$/

