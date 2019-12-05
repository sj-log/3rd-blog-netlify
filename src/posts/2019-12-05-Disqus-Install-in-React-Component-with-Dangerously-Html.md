---
comments: true
---

How to install Discus comments in ReactJs app.

I've struggled with a putting Disqus script in a component.
Should had to deploy behind the linds for Markdown configuration.

```js
     <script dangerouslySetInnerHTML={{ __html:`  var disqus_config = function () {
                        this.page.url = `+pathname+`;  // Replace * PAGE_URL with your page's canonical URL variable
                        this.page.identifier = `+key+`; // Replace PAGE_IDENTIFIER with your page's unique * identifier variable
                            };
 
                (function() { // DON'T EDIT BELOW THIS LINE
                    var d = document, s = d.createElement('script');
                    s.src = 'https://ollagada.disqus.com/embed.js';
                    s.setAttribute('data-timestamp', +new Date());
                    (d.head || d.body).appendChild(s);
                    })();
                    }</script>
           
                    <noscript>Please enable JavaScript to view the
                        <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
                    </noscript>
`}}>{
        
    }
</script>
```

normally, the disqus formal instruction is below.

![disqus-in-react](https://user-images.githubusercontent.com/35059428/70209768-741e2800-1774-11ea-9883-37e769b178f9.png)

then you just put the whole disqus context in between 

```
 <script dangerouslySetInnerHTML={{ __html: 
 
 `here` 
 
 }} 
 </script>
```

