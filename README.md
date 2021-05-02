# MeeW-Lykkehjul 
## How to run projeckt
- Clone or download this projeckt.
- Open a terminal (Bash) in the root of the project.
- Type: `npm install` to get the npm packages.
- Type: `npm install -g json-server` to install a light json server that we need for this projeckt
- Type: `code .` in terminal to open project in Visual Code or use a IDE for React of your own choice.
- Open a new terminal in the root of project and start server by typing this<br/> `json-server --watch src/data/db.json --port 8000`. 
- To test the server go to `http://localhost:8000/winners`
- Now use the first terminal and type: `npm start`
- You should now be up and running 
## Tecknology used in project

<dl>
<dt>Here is the different tecknologies and versions used in this projeckt</dt>
<dd>React v. 16.0.0</dd>
<dd>React-dom v. 16.0.0</dd>
<dd>React-router-dom v. 5.2.0</dd>
<dd>react-bootstrap v. 1.5.2</dd>
<dd>Bootstrap v. 4.6.0</dd>
<dd>React-wheel-of-prizes v. 1.0.8</dd>
<dd>Moment v. 2.29.1</dd>
<dd>json-server v. 0.16.3</dd>
</dl>

## Wheel of fortune api
This component is fully configurable. The properties `segments` and `segColor` are compulsory while the rest is optional.<br>
Wheel of fortune will run only once by default but if you want to run it more than once then you need to pass `isOnlyOnce={false}`
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
## Usage
Here you can pass your own array of segments in wheel with price-text

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
Here you can pass your own array of segmentscolors (same number as segments)
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
## Docs
Her er [link](https://github.com/cph-pk/MeeW-Lykkehjul/tree/develop/docs "Dokumenter") til diverse dokumenter for projektet.
