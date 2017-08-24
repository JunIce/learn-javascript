Function
 	new Function ([arg1[, arg2[, ...argN]],] functionBody)
 	使用Function构造器生成的Function对象是在函数创建时解析的。这比你使用函数声明或者函数表达式(function)并在你的代码中调用更为低效，因为使用后者创建的函数是跟其他代码一起解析的。

 	prototype:

 		Function.caller
 			获取调用函数的具体对象
 			在使用递归调用时, 你不能使用此属性来重现出调用栈

 	functions:

 		Function.prototype.apply(thisArg, [argsArray])
 			thisArg:

 			这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动指向全局对象（浏览器中就是window对象），同时值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的自动包装对象。

 			apply用法允许你在某些本来需要写成遍历数组变量的任务中使用内建的函数

 		Function.prototype.bind(thisArg[, arg1[, arg2[, ...]]])
 			创建一个新函数（称为绑定函数），新函数与被调函数（绑定函数的目标函数）具有相同的函数体（在 ECMAScript 5 规范中内置的call属性）
 			新函数被调用时 this 值绑定到 bind() 的第一个参数，该参数不能被重写

 			bind() 最简单的用法是创建一个函数，使这个函数不论怎么调用都有同样的 this 值。

 			使用 window.setTimeout() 时，this 关键字会指向 window （或全局）对象。当使用类的方法时，需要 this 引用类的实例，你可能需要显式地把 this 绑定到回调函数以便继续使用实例。
 			绑定函数适用于用new操作符 new 去构造一个由目标函数创建的新的实例。
 			当一个绑定函数是用来构建一个值的，原来提供的 this 就会被忽略。
 			然而, 原先提供的那些参数仍然会被前置到构造函数调用的前面。

 			在你想要为一个需要特定的 this 值的函数创建一个捷径（shortcut）的时候，bind() 方法也很好用。
 			//IE > 9
 	
 		






