---
title: Code and stuff!
abstract: Syntax highlighting
author: wintersmith
date: 2012-12-08 15:00
template: article.jade
tags: example, wintersmith
status: published
---

Syntax highlighting with highlight.js

### JavaScript

```javascript
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
```

<span class="more"></span>

### HTML

```
<!DOCTYPE html>
<title>Title</title>

<style>body {width: 500px;}</style>

<script type="application/javascript">
  function $init() {return true;}
</script>

<body>
  <p checked class="title" id='title'>Title</p>
  <!-- here goes the rest of the page -->
</body>
```
## More samples

Taken from [wikipedia](https://en.wikipedia.org/wiki/Hello_world_program_examples).

### PHP

```php
<?php echo 'Hello, world'; ?>
```

### Python

```python
print("Hello World")
```

### Ruby

```ruby
puts "Hello world!"
```


### C++

```cpp
#include <iostream>

int main()
{
  std::cout << "Hello World!" << std::endl;
  return 0;
}
```

### C-sharp

```
class ExampleClass
{
    static void Main()
    {
        System.Console.WriteLine("Hello, world!");
    }
}
```

### Erlang

```erlang
io:format("~s~n", ["hello, world"])
```

### Go

```go
package main

import "fmt"

func main() {
   fmt.Println("Hello World!")
}
```

### Java

```java
public class HelloWorld {
   public static void main(String[] args) {
       System.out.println("Hello world!");
   }
}
```






