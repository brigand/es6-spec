var fs = require('fs');
import 'babel/polyfill';
import Promise from 'bluebird';
global.Promise = Promise;
Promise.promisifyAll(fs);

var indexHtml = fs.readFileSync('src/index.html', 'utf8');
function makePage(content){
  var [before, after] = indexHtml.split('<!--PLACE-->');
  return before + content + after;
}

async function processFile(path){
  var content = await fs.readFileAsync('data/' + path + '.json', 'utf8');
  var data = JSON.parse(content);
  await fs.writeFileAsync(path + '.html', makePage(data.html), 'utf8');
  console.log('Finished ' + path);
}

async function main(){
  var files = await fs.readdirAsync('data/sec');
  var ps = [];
  for (let file of files) {
    let path = 'sec/' + file.split('.json').shift();
    ps.push(processFile(path));
  }
  await* ps;
  console.log('Finished ' + ps.length);
}

main();

