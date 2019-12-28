<script>
export default {
  onLaunch: function() {},
  onShow: function() {},
  onHide: function() {}
}
</script>

<style>
/*每个页面公共css */
@font-face {font-family: "iconfont";
  src: url('http://at.alicdn.com/t/font_1576018_7kwktz5xsxr.eot?t=1577449521224'); /* IE9 */
  src: url('http://at.alicdn.com/t/font_1576018_7kwktz5xsxr.eot?t=1577449521224#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAW8AAsAAAAACrgAAAVuAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDQAqIKIZmATYCJAMYCw4ABCAFhG0HYxsfCcgekqRjAQV+x4EELABwBNBaOgu3AQAF6BKPrCJkFFBZVbOK0gU0uo7AiP95PO39ZJ0yQ2lH8ggGJ+Borc2LgyfaREwSnzBLKsve7J7OnmhKdEImW6Mlfrhf8mXZYb6rdMmoTT+OxqMEGlBEY5TwBjL3oWwRzyaD/wm8nYBGo0ygNb+zS+jKVGeAqdM8LaAbCckFrKDeWzJOzdJoFDjqYx92AcBL5+fDf7AKgiCqEqh3OjrZt2DrFzw7j7f+b5WYeqCruwTYs0iYAzLhTmbqXMNrzcE1yo2mFaD8Rr0o/kLPiGdqz87//88vILYFpRo1a+NkUdXRHy8UUF3NgNtrV/wCQ07mF5IT+UWYit1qEJDAfR4sh+QrHRqQFHbC70GljmlEWbICoRkuLSVhLES0S+tUHKD6GTeKipFkmHSW5YGDGzqJptOYZ1z2OY9+SlJP6hMusuA5Endc00LLrxMDjuTaja0bDGL2xK9YAPB4oe6APm99mxF3VUOjo6knMTKw8CJB7D6M0KJjdsKcofGUsPCKKwpY1lnyMzFoRp6YmgJofyIsHFyq4ZXtSccpxalZmckVMiv0pqflplc5X6gwuXChIk1e9DxqSccssdhCheyhfCguw0RdY7jLWO3lrDvL01+tOzU3u0ZmD2VCUeRWOpAmBtiUx50/fFh5Zr78YlZt0TGjdXqr9GhyTnEhZbDmgs0OJvbUY0qLEMPbzPrPU5q3XHm+8f7YNSqzqnNrZadWyq8+rNz71twdFbz3Njm56X6ZGK4pITPZKkvGSMhODcjzSId8Xt+V4BV5BrW62op8x9aL0Naot49w1i7GxsdQMSoaHy/Ggvo4KkLFibnwP/QzH8ifNTbAZ9yKc5u7Alfy3bmNr4TAnTumHWdM1ONvX9LxyJrJVcjS1cDibK78s/t/5c4aU+doLhHJFVmqIa7IxY/qHaE2UQL3rwacG2pqDGFyNDUuJfRPskzXPWJc4ydabeGnuujVqeWYprf0Xh9/yANQSwVkHY9/DCaz8vt3H6+jCUe+D2IYHv3NJjoQNjNMzjfsW2dc8rIsZLE+8OnX2tiyJvJv38PSLe9X9XiH1j11mZ9potJe/J4OOiPcws95qZoyPoI+wn5Ei9eGpFfTuE90PXv5XZeyTYHBr7P2lW5n97s50J+i3X44RsjvUYttuaOvQN0oTS/h12tMVxC74veq7kIRK0f9O6MXF05K+kp6WIBUv3f+0Qe/np/op+23m47pY6Sp7+5Ie9F+pwXON+8tFy0fX5DeEqP7690nH283JGRFZHUnX0PIo/93fYq9aNbwv3uv6e2BWdSr2PdOLfQp9EHY6Nt7KSfgloUAtaONw7i7w92aTuMeezekC3gPAGkDW/oh76ZmczKSIu7yVZB4uZd9MVG0xFKtIUP1dr0Ia/5sI7niZlsVqxouWUIwwjdQqVzcQi+NiEZtEZ9rrtO9rqI9uu0E9XoCiOqMQFJvDJVxc1BpsgBFvUVoNMv/7CZdyjWELATM6CIQtNsMUatPkLS7iMq4u1Dp9RaK9oBDo+MgfckmEyFP2LucREoWptdhXoZhpUfTvjt9TjrzRRy2OpxrihOnipZmFvHuITHFXRxRUa3XKysVZpebAP3I3cj3DZaWG5dkupxbmYZDc/PsrFdazigJoG9VjAgpYkHpKiiPZDBlLZ3qJ77/HNEyPiEuQJR1r5FYwtk4smTGogLq0MWVEKcyv0JOW1eJDQVls5NGAPlhgvhay0Cl2Tu5iJRaltugERoyx4Wyq7qWh/cEZ3kdNFKfqwQM4YgPcRA/EoDysIS1nbXTS5Rg3a3INVnqsJ6uiYhVTpVxdaxP0nek186pEvzmAAAAAA==') format('woff2'),
  url('http://at.alicdn.com/t/font_1576018_7kwktz5xsxr.woff?t=1577449521224') format('woff'),
  url('http://at.alicdn.com/t/font_1576018_7kwktz5xsxr.ttf?t=1577449521224') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('http://at.alicdn.com/t/font_1576018_7kwktz5xsxr.svg?t=1577449521224#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-yonghu:before {
  content: "\e6cb";
}

.icon-bofang:before {
  content: "\e601";
}

.icon-shouting:before {
  content: "\e61e";
}

.icon-wangyiyunyinleclick:before {
  content: "\e600";
}

.icon-guanbi:before {
  content: "\e60b";
}
</style>
