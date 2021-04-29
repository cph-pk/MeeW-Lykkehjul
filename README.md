# MeeW-Lykkehjul 
### How to run projeckt
- Clone or download this projeckt.
- Open a terminal (Bash) in the root of the project.
- Type: `npm install` to get the npm packages.
- Type: `npm install -g json-server` to install a light json server that we need for this projeckt
- Type: `code .` in terminal to open project in Visual Code or use a IDE for React of your own choice.
- Open a new terminal in the root of project and start server by typing this<br/> `json-server --watch src/data/db.json --port 8000`. 
- To test the server go to `http://localhost:8000/winners`
- Now use the first terminal and type: `npm start`
- You should now be up and running 
### Tecknology used in project
Here is the different tecknologies used in ths projeckt:

React v. 16.0.0

React-dom v. 16.0.0

React-router-dom v. 5.2.0

react-bootstrap v. 1.5.2

Bootstrap v. 4.6.0

React-wheel-of-prizes v. 1.0.8

Moment v. 2.29.1


### Wheel of fortune api

|Properties|default value|Optional|
|---|---|---|
|segments 	|NA 	|No|
|segColors |	NA| 	No|
|winningSegment| 	NA| 	Yes|
|onFinished|NA|Yes|
|primaryColor| 	'black'| 	Yes|
|contrastColor|'white'| 	Yes|
|buttonText| 	'spin'| 	Yes|
|isOnlyOnce| 	true| 	Yes|
|size|NA|Yes|
|upDuration| 	100| 	Yes|
|downDuration| 	1000| 	Yes|


```javascript
const segments = [ 
    'bedre held næste gang',
    'vundet 50 kr.',
    'vundet 100 kr.',
    'bedre held næste gang',
    'vundet 200 kr.',
    'vundet fri levering',
    'bedre held næste gang',
    'vundet en T-Shirt'
  ]
```

```javascript
const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000'
  ]
```