# taggify

A small library to turn a any `<ul>` tag into tag field.

I also intend to use this libary to do a full TDD project as well.

#How to use it?

This is the sample I created

```
<!doctype>
<html>
<head>
	<link href="css/taggify.css" rel="stylesheet" type="text/css"/>
	<script src="lib/jquery-1.11.3.min.js"></script>
	<script src="src/taggify.js"></script>
</head>
<body>
	<h1>Please add tag</h1>
	<ul id="tag">
	</ul>
<script>

$(function() {
	$('#tag').taggify();
});

</script>
</body>
</html>
```

And that's it. Have fun!

#How to run test?
You need to install all the dependencies first.
```
npm install
```

Then you can run test suite

```
gulp
```

It's going to watch the test files and re-run the test every time the file is changed. 



