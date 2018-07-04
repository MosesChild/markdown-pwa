# markdown-pwa Readme

markdown-pwa is meant to be a simple progressive web app for writing and reading markdown.

I also started this project to practice:
* making a progressive web application.
* using react with my current skillsets to update one of my first projects.
* scaffolding a react-app in vs-code
* transporting my codepen code to a realistic editing environment (vs-code).

## Next steps
- [ ] Turn into a progressive app!
- [ ] Create a header bar.
- [ ] Stylize for both mobile and desktop 
- [ ] Add file upload/download functionality

Possible further steps
- [ ] add more markdown(like checkboxes)


## markdown-PWA build log
## 7/3/2018
Prepared to replace "collapsible" functionality:
* Compartmentalized "collapse" into its own module ("collapse.js")
* saved version of markUp.js -> markUp-collapse.js for easy restore if necessary.

## 6/27/2018

### Investigated some react components for header. 

  * Wasn't crazy about react-bootstrap (It requires too much difference from normal react-flow as it prefers working with props.children over props.)
  * React-sticky seemed like it wasn't great either as for the most part 'sticky' css should work.  Maybe later when I support browsers that don't have this property.

### Uninstalled SASS pre-processing!

I didn't like the vulnerability warnings from the dependencies.
Instead I am using the css file that it had generated.  On reading the create-react-app readme, I saw how it recommended working with webpack.
### Installed prettier using this [article](https://medium.com/technical-credit/using-prettier-with-vs-code-and-create-react-app-67c2449b9d08)
```bash
 yarn add --dev --exact prettier
 yarn add --dev eslint-plugin-prettier
```

### Installed Material-UI [@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons) React ready material-ui icons.




## 6/26/2018

### Installed some of the original codepen dependencies.
* npm install dompurify // important to prevent can inject html injection attacks 
* npm install marked --save // does the markup processing!!
* Ignored materialize & jquery dependencies because:
  * efficiency (jquery didn't seem necessary at all!)
  * materialize (wasn't bringing enough to warrant.)

### Installed new dependency
* npm install react-collapsible --save
  * Provided easier collapsible support than materialize.

### Setup pre-processing sass->css
* Followed create-react-app instructions to pre-process (watch) my sass file to css.  I did this because it seemed easier than converting my sass to css by hand... The document advised that sass may not be necessary (as React recommends you should create individual css tags per component rather than using classes for inheritance.)
* Updated sass
  * Uses flexbox for much cleaner code
  * follows clearer naming.

### Updated components

* created nicer collapsible component  **MarkupKey** in **markupKey.js** module. 
  * stores the default 'text' for export, and 
        preprocesses a html viewable version ('userMarkupKey') for MarkupKey.
  * uses react-collapsible to easily show/hide  MarkupKey component;
* **MarkUpEditor** component in markUp.js module.
  * Fixed data-flow so that user input stays in state (and not in a Global Variable!!)
  * Direct all input through DOMPurify and marked before being stored or viewed.
* **MarkupViewer** component in module markupViewer.js
  * Isolated this component as its own module and it should work on its own to display markup.

### **Git**
* Made first commit.
* Setup remote origin at github
* Pushed to remote Origin
* Tested and noticed problem when creating input.

### Fixed bug!
* No html tags can be injected (only markup works to stylize content) as all input is filtered by DOMPurify set to not allow any tags!  Kerrits "<>" show up in MarkupViewer but are changed to '\&lt;' in the textarea (and in the MarkupEditor component) preventing them from doing harm.
* Commit to git.

## 6/25/2018
### Bootstrapped react app with create-react-app 
```bash
VS-Code Projects$ npx create-react-app my-app
```
### Changed name of folder to markup-PWA

### Copied files from [my codepen](https://codepen.io/moseschild/pen/rGKgZG)
* copied javascript as markUp.js
* Altered src/index.js to point to my markUpEditor
* copied sass as index.sass


