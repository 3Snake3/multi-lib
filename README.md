# multi-lib
Mindustry library mode that contains multicrafter scripts
Support over Mindustry 6.0 version.

What you can do with this library
1. Set multiple recipes in your crafter
2. Every input, output, craftTime can be differed
3. Selection table for which recipe to be enabled
4. Crafter can act as power generator according to recipe settings
5. Extensible block and entity function

# notice
I serve militery because of korean duty. This mod won't be updated well.
As crafter-related things aren't change much in mindustry, this mod won't be oudated fastly

How to use
----------
you must add line below in mod.(h)json of your mod:
```json
dependencies:["multi-lib"]
``` 

example code
```js
const multiLib=require("multi-lib/library");
//you can use GenericSmelter instead GenericCrafter
//also GenericSmelter.SmelterBuild instead GenericCrafter.GenericCrafterBuild
//                                                                           ▼this has to be same with .json file name
//
const multi=multiLib.MultiCrafter(GenericCrafter,GenericCrafter.GenericCrafterBuild,"multi",[
    /*default form for each recipes. You can change values.
    {
        input:{
            items:[],     Modded Item:  "mod-name-item-name/amount", Vanilla Item: "item-name/amount"
            liquids:[],   Modded Liquid:  "mod-name-liquid-name/amount",  Vanilla liquid: "liquid-name/amount"
            power:0,
        },
        output:{
            items:[],
            liquids:[],
            power:0,
        },
        craftTime:80,
    },*/
    {//1  you can skip recipe properties
        output:{
            power:5.25
        },
        craftTime:12
    },
    {//2
        input:{
            items:["coal/1","sand/1"],
            liquids:["water/5"],
            power:1
        },
        output:{
            items:["thorium/1","surge-alloy/2"],
            liquids:["slag/5"],
        },
        craftTime:60
    },
    {//3
        input:{
            items:["pyratite/1","blast-compound/1"],
            liquids:["water/5"],
            power:1
        },
        output:{
            items:["scrap/1","plastanium/2","spore-pod/2"],
            liquids:["oil/5"],
        },
        craftTime:72
    },
    {//4
        input:{
            items:["sand/1"],
        },
        output:{
            items:["silicon/1"],
        },
        craftTime:30
    },
],{
    /*you can customize block here. ex) load()*/
},
/*this is Object constructor. This way is much better than literal way{a:123}
you can replace this with {} if you don't want to modify entity*/
function Extra(){
    /*you can use customUpdate=function(){}. this function excuted before update()
    also this.draw=function(){}
    you can customize entity here.
    ex)
    this._myProp=0;
    this.getMyProp=function(){
        return this._myProp;
    };
    this.setMyProp=function(a){
        this._myProp=a;
    };*/
});
/*
YOU MUST NOT MODIFY VALUE OF THESE
configurable
outputsPower
hasItems
hasLiquids
hasPower
*/
//using example without .json file. I don't recommand this way because you can't use mod item as requirements.
multi.localizedName="multi";
multi.description="multi";
multi.itemCapacity= 30;
multi.liquidCapacity= 20;
multi.size= 4;
multi.health= 100;
multi.craftEffect= Fx.pulverizeMedium;
multi.updateEffect=Fx.none;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
multi.dumpToggle=false;
multi.requirements(Category.crafting,ItemStack.with(Items.copper,75));
```
