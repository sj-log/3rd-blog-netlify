How to make a category page that syncronizely changing in Posts list

# 
1. yarn add query-string

why? we'll use paging by location.search query


## error comes out


`unexpected use of 'location' no-restricted-globals in react js`

### what to do?

add window.location 



We can update a page with in `shouldComponentUpdate()`

You can see the nextProps comes out.
then we can add some function here to update page.
because this shouldComponentUpdate() is always waiting for a  