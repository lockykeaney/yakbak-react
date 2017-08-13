okay.  I haven't used fetch myself, so I'm not familiar with the exact syntax, but that's sort of a side issue that can be hand-waved here
third: the thing about promises is that you need to pass in functions as callbacks to .then()
in your example snippet there, that's not happening
so.  A semi-realistic snippet might look like, say:
```
submitPost(event) {
    event.preventDefault();

    if(isStateValid(this.state.newPost) {
        fetch("/submitPost", this.state.newPost)
            .then(this.getAllPosts.bind(this))
            .then(() =>  this.setState({newPost : ""}) )
    }
}
```
key differences there
I'm now passing in a function to both .then() promises
since this.getAllPosts is a method of the class, I'm assuming you are probably using the this keyword inside the function
so we need to pass a bound-up version of the function to ensure that this actually points to the class when it's called
second, we pass an arrow function and call setState() inside of it, for the same reason
