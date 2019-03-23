# Night Mode!
This a free guide to add night mode on your basic website and make it more accessible!

# Why?
The era we live in definitely requires a night mode that user can turn on or off on your website for the sake of everybodys eyes.

# Quickstart.
Start by adding your website a button for this job. One like this: 

![alt text](https://raw.githubusercontent.com/burraksumer/NightMode/master/img/button.png "Button")

And give it the class of ***Moon***.

### Start adding the code. 

You can download the JS file in this repository or use the one here:

```javascript
//Check if the local storage has the dark mode or light mode prefence.

document.addEventListener('DOMContentLoaded', (event) => {
    ((localStorage.getItem('mode') || 'dark') === 'dark') ? 
    document.querySelector('body').classList.add('dark') : 
    document.querySelector('body').classList.remove('dark')
  });

//Get the element and add the dark class to them.

  document.getElementById("moon").addEventListener("click", e => {
    localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark')
    const elements = document.querySelectorAll("body, hr");
    elements.forEach(el => {
      if (localStorage.getItem('mode') === 'dark') {
        el.classList.add('dark') 
      } else {
        el.classList.remove('dark')
      }
    })
  });
```
This will basically store a file on users computer and check it everytime they open the website to see what their choices are and add a class called ***Dark*** *to* **body** tag so that you can easily add **CSS** styles to shape your site.

### Then
You are going to add the **CSS**.

*This might take a lot of time or none depending on your website, remember this is for basic websites and following code should do the job for ***most*** basic websites.*

```css
body.dark {
  font-family: 'Source Sans Pro', sans-serif;
  background-color: #1e2227;
  font-size: 20px;
  color: #fff;
}

    body.dark hr {
      border: 1px solid #808080;
    }
```
At this point you should style you website to your liking and accessibility of course. Keep in mind that you are doing this for the user and keep them in your mind in the first place.

## Voilà!
You are pretty much done and it's looking like this.

![alt text](https://raw.githubusercontent.com/burraksumer/NightMode/master/img/sc.gif "Showcase")

#### Some Notes:
* This should work for whole website, just link to your **HTML**s and you are good to go.
* Change the design and make it to your fitting for sure.
* This is for personal use mostly and it is hard to use this on a very big website but can be easily implemented to [Jekyll](https://jekyllrb.com/) and other website buldiers.
* Make your contributions and I will check them every week.

## License & credits
Created by [Burak Sümer](https://github.com/burraksumer), licensed under [MIT licence](https://github.com/burraksumer/NightMode/blob/master/LICENSE).

Buy me a [coffee⚡](https://tippin.me/@burraksumer).







