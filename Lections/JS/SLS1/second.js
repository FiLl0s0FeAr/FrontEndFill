let object = makeObject();
object
    .addProperty('somename', 'somevalue')
    .addProperty('somename1', 'somevalue1')
    .addProperty('somename2', 'somevalue2');

console.log(object.show());

function makeObject(){
    let object = {};
    let obj = {
        addProperty(name, value){
            object[name] = value;
            return obj;
        },
        show(){
            return object;
            for(let key in object){
                console.log(key, object[key]);
            }
        }
    };
    return obj;
}
