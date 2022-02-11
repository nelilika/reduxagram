Number('23') - Number(true) - Number(null) - undefined // Андраник - NaN
!{} + '5' - false || 1 // Денис - 1
![] - '5' + (false || 1) // Валера -4
'false' && 'true' + {} - [] // Вадим  - NaN
+{} + {} + [] + [{}] + [{},{}] // Андрей 'NaN[object Object][object Object][object Object],[object Object]'
'hello' + ((+'50' / (9 + !!true)) - ([] + 5)) // Сергей
!!'{}' + !!{} - !!'[]' - !![] // Алеся
([] > {}) - ([] < {}) // Евгений - -1
('5' + +[5] + true * 5) / (!![] * 5) // Василий - 111
((NaN == NaN) > -1) + +'16' - [] // Оля - 17
false + {} - [] + [{}] // Арсен
1 + '2' + true + false + null + undefined + {} + [] // Андрей - '12truefalsenullundefined[object Object]'

{} + [] === {} + [] // !!! 