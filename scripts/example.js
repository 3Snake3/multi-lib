/*const multiLib = require("library");

const multi = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "your-multi-crafter", [
    {
      input: {
        items: [], //Items from your mod - items: ["modname-itemname/amount"] 
                       //two and more items - items: ["modname-itemname/amount", "modname-itemname/amount"] 
                      //Vanilla items - items: ["itemname/amount"] 
                     //two and more - items: ["itemname/amount", "itemname/amount"]
        liquids: [],  //liquids from your mod - liquids: ["modname-liquidname/amount"] 
                       //two and more liquids - liquids: ["modname-liquidname/amount", "modname-liquidname/amount"] 
                      //Vanilla liquids - liquids: ["liquidname/amount"] 
                     //two and more - liquids: ["liquidname/amount", "liquidname/amount"]
        power: 0
      },
      output: {
      //same
        items: [], 
        liquids: [],
        power: 0
      },
      craftTime: 0
    },
    {
          input: {
            //you can do like this
            power: 0
          },
          output: {
            //If your multi-crafter consumes items AND liquids in the recipe at the input and/or output, it is necessary to put a comma at the end of the stroke, also if it consumes power.
            items: [],
            liquids: [],
            power: 0
          },
          craftTime: 0
        },
        {
          input: {
            items: ["copper/1", "lead/1"],
            liquids: ["water/1", "oil/1"],
            power: 3
          },
          output: {
            items: ["titanium/1", "thorium/1"],
            liquids: ["slag/1", "cryofluid/1"],
            power: 6
          },
          craftTime: 120
        },
        {
          input: {
            liquids: ["oil/1"]
          },
          output: {
            items: ["coal/1"]
          },
          craftTime: 160
        },
        {
          input: {
            items: ["copper/1"]
          },
          output: {
            items: ["lead/1"]
          },
          craftTime: 160
        },
        {
          input: {
            power: 3
          },
          output: {
            items: ["copper/1"]
          },
          craftTime: 160
        },
        {
          input: {
            items: ["copper/1"]
          },
          output: {
            power: 3
          },
          craftTime: 160
        },
        {
          input: {
            items: ["coal/1"]
          },
          output: {
            liquid: ["oil/1"]
          },
          craftTime: 160
        },
        {
          input: {
            liquids: ["oil/1"]
          },
          output: {
            liquids: ["slag/1"]
          },
          craftTime: 160
        },
        {
          input: {
            liquids: ["oil/1"]
          },
          output: {
            power: 3
          },
          craftTime: 160
        },
], {
  },
  //you can customize block here
//this is Object constructor. This way is much better than literal way
//you can replace this with {} if you don't want to modify entity
function Extra(){
    //you can use customUpdate=function(){}. this function excuted before update(), also this.draw=function(){}
    //you can customize entity here
    this.draw=function(){
      let region1 = Core.atlas.find("modname-your-multi-crafter-top") //-top texture
      Draw.rect(region1, this.x, this.y);
      let region2 = Core.atlas.find("modname-your-multi-crafter") //base texture
      Draw.rect(region2, this.x, this.y)
};
});
//YOU MUST NOT MODIFY VALUE OF THESE
configurable
outputsPower
hasItems
hasLiquids
hasPower
//using example without .json file. I don't recommend this way because you can't use mod item as requirements.
multi.localizedName="multi";
multi.description="multi";
multi.itemCapacity= 30;
multi.liquidCapacity= 20;
multi.size= 4;
multi.health= 100;
multi.craftEffect= Fx.pulverizeMedium;
multi.updateEffect=Fx.none;
//true: dump items and liquids of output according to button
//false: dump items and liquids of output unconditionally
multi.dumpToggle=false;
multi.requirements(Category.crafting, ItemStack.with(Items.copper,75));*/