# Blog Props

A great way to practice building web stuff is to copy sites or apps that are already built.

This exercise will help you to fight through the harder aspects instead of saying "I actually wanted it to look like this," when you might just want to take the easy way out.

Re-create [this](https://blackrockdigital.github.io/startbootstrap-clean-blog/#) website.

You will organize it into these components:

Indented components are suppose to be nested.
```
<Header />  
    <Navbar />
<BlogList />  
    <BlogPost />
<Footer />  
```

You will pass `<BlogPost />` its `title`, `subtitle`, `author`, and `date` through props.