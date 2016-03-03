# Music History

This is the project that you will be working for your individual work throughout the entire front end course. Don't worry, you'll be building lots of other applications, but when you learn a new technique, library or language, you'll be cutting your teeth with it on Music History.

I've started you off with a very basic HTML document, the `index.html` file. This file name is the default file that most any web server looks for in the directory in which is was started. This is why you don't have to type in `www.google.com/index.html`. If the file exists, the web server sends it back to you if you just request the root URL.

> **Terminology:** Root URL simply means your domain name (or IP address) with no other documents, or folders specified. `www.google.com` is the root URL of Google's web site, but `www.google.com/finance` is not.

## Your first Fork & Clone

You're going to get a copy of this Github repository downloaded - a.k.a. cloned - to your machine using the `git` command. Here's how to do it.

1. Open your terminal window and make sure you are in your Vagrant machine.
2. If you are not already there, go to the `/vagrant` directory.
3. Look all the way up and to the right of this screen and you'll see a button with the word **Fork** on it. Click that button.
4. What you've just done is taken a copy of *my* repository and all the code inside it, and copied into your Github account. You can now do whatever you like to your fork of my repository and it won't affect mine at all.
5. Now on the top of the page, you will see the text **HTTPS** with a text box next to it. Make sure that HTTPS is selected.  
6. Click the little clipboard icon to the right and it copies that URL to your computer's clipboard.
7. Go back to your terminal window (remember to use _Cmd+Tab_ keyboard shortcut on a Mac, or _Alt+Tab_ on Windows).
8. Type in `git clone ` and then paste the URL after that text. You should see
   `git clone https://github.com/{your account name here}/musichistory-boilerplate.git musichistory`
1. Hit your enter key and git will do two things. First, it creates a `musichistory` sub-directory under `/vagrant` and then downloads all the code into that directory.
1. Now `ls musichistory`.
1. You will see the lonely `index.html` file sitting in there.

Congratulations, you've just cloned your first Github repository!

Now here's your assignment.

## Individual Assignment

You will be building the basic structure of your Music History application in HTML and making it look good with the skills you learned in CSS.

Visit the [Music History mockup](https://moqups.com/chortlehoort/1E8LJX7r/) that I created. You will be recreating that document in your own HTML file.

### Criteria 

1. Create five options for the artist select element of any artist that you enjoy.
1. Create at least five options for the album select element. One, or more, album for each artist.
1. The links in the navigation bar don't need to link to anything just yet, you can use `<a href="#">View music</a>` for now
1. Pick your four favorite songs from the artists you have chosen and use the information for each in the list that's on the right-hand side. You can use `h1` tags, `div` tags, `section` tags... whatever you like.

## Completing

Once you are done, make sure you add your files to git, make a commit, and then push your new code up to Github with the following command `git push origin master`.
# music_history


# Music History Part 3

## Instructions

Time to make Music History into a single page application. Before you begin please [review the sample code](https://github.com/nashville-software-school/front-end-curriculum/tree/master/15-javascript-103#simple-spa-using-events-and-css) I provided in JavaScript 103 about building a simple SPA.

1. In the navigation bar, make sure you have two links labeled "List Music", and "Add Music".
1. Add a DOM element that contains some input fields for the user to enter in the name of a song, the artist for the song, and the album. You do not need to enclose them in a `<form>` element because we're not actually submitting this form anywhere.
1. Add a `<button>` element at the bottom of the input fields labeled "Add".
1. The input fields and the add button make up the *Add Music View*.
1. The existing view - the combination of the filter form and the song list - will be referred to as the *List Music View*.
1. The *Add Music View* should not appear when the user first visits your page. The song list with the corresponding filter form should be visible.
1. When the user clicks on "Add Music" in the navigation bar, the *List Music View* should be hidden, and the *Add Music View* should be shown ([see example wireframe](https://moqups.com/chortlehoort/1E8LJX7r/p:a0cf17f7b)).
1. When the user clicks on "List Music" in the naviation bar, the *Add Music View* should be hidden, and the *List Music View* should be shown ([see example wireframe](https://moqups.com/chortlehoort/1E8LJX7r/p:a8d99d401)).
1. Once the user fills out the song form and clicks the add button, you should collect all values from the input fields, add the song to your array of songs, and update the song list in the DOM.

## Merging

Remember to merge the `version-3` branch back into `master` when you're done.
