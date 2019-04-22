# Javascript Keycode

![thumb](thumb.png)

Usage : https://marshall-ku.github.io/Javascript-Keycode/

***

Press any button to see event.key, event.location, event.which, event.code.

If you click clipboard icon, the content of it will be copied to your clipboard.


##note

If you press shift + key, event.key detects the result, but event.which and event.code detect key only

```
ex)
shift + 1 

event.key = !
event.which = 81
event.code = Digit1
```