jQuery easySelectable
=============


Demo
----------------
[JQuery easySelectable demo](https://mee4dy.ru/dev/github/plugins/easySelectable/index.html)

Description
----------------
JQuery easySelectable is a plugin that allows the user to highlight items like selectable jquery-ui but better.

How to use easySelectable?
--------------------
add the Following code to the &lt;head&gt; of your document.
```html
<link type="text/css" rel="stylesheet" href="css/easySelectable.css" />
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="js/easySelectable.js"></script>
    // Do not include both easySelectable.js and easySelectable.min.js
```

### HTML Structure ###
```html
<ul id="easySelectable">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
    <li>11</li>
    <li>12</li>
    <li>13</li>
    <li>14</li>
    <li>15</li>
    <li>16</li>
  </ul>
```

### Call easySelectable! ###
```html
<script type="text/javascript">
$(function(){
	$('#easySelectable').easySelectable();
})
</scirpt>
```

### Play with settings ###
```html
<script type="text/javascript">
$(function(){
	$('#easySelectable').easySelectable({
    item: 'li',
    state: true,
    onSelecting: function(){
      console.log('onSelecting');
    },
    onSelected: function(){
      console.log('onSelected');
    },
    onUnSelected: function(){
      console.log('onUnSelected');
    }
  });
})
</scirpt>
```
